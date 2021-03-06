<?php
namespace ArminVieweg\Dce\Domain\Repository;

/*  | This extension is made for TYPO3 CMS and is licensed
 *  | under GNU General Public License.
 *  |
 *  | (c) 2012-2018 Armin Vieweg <armin@v.ieweg.de>
 */
use ArminVieweg\Dce\Domain\Model\Dce;
use ArminVieweg\Dce\Domain\Model\DceField;
use ArminVieweg\Dce\Utility\DatabaseUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Persistence\Generic\Typo3QuerySettings;
use TYPO3\CMS\Extbase\Persistence\QueryInterface;

/**
 * DCE repository
 */
class DceRepository extends \TYPO3\CMS\Extbase\Persistence\Repository
{

    /**
     * @var \TYPO3\CMS\Extbase\Service\FlexFormService
     * @inject
     */
    protected static $flexFormService = null;

    /**
     * @var Dce[]
     */
    protected static $dceInstanceCache = [];

    /**
     * @var Typo3QuerySettings
     */
    private static $defaultQuerySettingsInstance;

    /**
     * Returns database DCEs and static DCEs as merged array
     *
     * @param bool $includeHidden
     * @return array
     */
    public function findAllAndStatics($includeHidden = false) : array
    {
        if ($includeHidden) {
            /** @var \TYPO3\CMS\Extbase\Persistence\Generic\Typo3QuerySettings $querySettings */
            $querySettings = GeneralUtility::makeInstance(Typo3QuerySettings::class);
            $querySettings->setIgnoreEnableFields(true);
            $this->setDefaultQuerySettings($querySettings);
        }
        $this->setDefaultOrderings(['sorting' => QueryInterface::ORDER_ASCENDING]);
        return $this->findAll()->toArray();
    }

    /**
     * Returns a DCE from the instance cache
     *
     * @param integer $uid Content object uid
     * @return Dce|null
     */
    public function findInCacheByContentObjectUid($uid)
    {
        if (array_key_exists($uid, static::$dceInstanceCache)) {
            return static::$dceInstanceCache[$uid];
        }
        return null;
    }

    /**
     * Finds and build a DCE. The given uid loads the DCE structure and the
     * fieldList triggers the fillFields which gives the dce its contents
     * and values.
     *
     * @param int $uid
     * @param array $fieldList
     * @param array $contentObject
     * @param bool $doNotCache If true forces to not use the internal cache
     * @return Dce
     */
    public function findAndBuildOneByUid($uid, $fieldList, $contentObject, $doNotCache = false) : Dce
    {
        if (!$doNotCache && array_key_exists($contentObject['uid'], static::$dceInstanceCache)) {
            return static::$dceInstanceCache[$contentObject['uid']];
        }
        $this->disableRespectOfEnableFields();

        /** @var $dce Dce */
        $dce = $this->findByUid($uid);

        if (!$dce instanceof \ArminVieweg\Dce\Domain\Model\Dce) {
            throw new \UnexpectedValueException('No DCE found with uid "' . $uid . '".', 1328613288);
        }
        $dce = clone $dce;
        $this->cloneFields($dce);

        $this->processFillingFields($dce, \is_array($contentObject) ? $contentObject : [], $fieldList);
        $dce->setContentObject(\is_array($contentObject) ? $this->resolveContentObjectRelations($contentObject) : []);
        static::$dceInstanceCache[$contentObject['uid']] = $dce;
        return $dce;
    }

    /**
     * Returns content element rows based on given DCE object
     *
     * @param Dce $dce
     * @return array|null
     */
    public function findContentElementsBasedOnDce(Dce $dce)
    {
        return DatabaseUtility::getDatabaseConnection()->exec_SELECTgetRows(
            '*',
            'tt_content',
            'CType="dce_dceuid' . $dce->getUid() . '" AND deleted=0'
        );
    }

    /**
     * Clones the fields of a dce separately, because cloning the dce just
     * refers the fields
     *
     * @param Dce $dce
     * @return void
     */
    protected function cloneFields($dce)
    {
        /** @var $clonedFields \TYPO3\CMS\Extbase\Persistence\ObjectStorage */
        $clonedFields = GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class);
        /** @var $field DceField */
        foreach ($dce->getFields() as $field) {
            $field = clone $field;
            if ($field->getType() === DceField::TYPE_ELEMENT || $field->getType() === DceField::TYPE_SECTION) {
                if ($field->getSectionFields()) {
                    /** @var $clonedSectionFields \TYPO3\CMS\Extbase\Persistence\ObjectStorage */
                    $clonedSectionFields = GeneralUtility::makeInstance(
                        \TYPO3\CMS\Extbase\Persistence\ObjectStorage::class
                    );
                    foreach ($field->getSectionFields() as $sectionField) {
                        /** @var $clonedSectionField DceField */
                        $clonedSectionField = clone $sectionField;
                        $clonedSectionField->setValue(null);
                        $clonedSectionFields->attach($clonedSectionField);
                        $field->setSectionFields($clonedSectionFields);
                    }
                }
                $clonedFields->attach($field);
                $dce->setFields($clonedFields);
            }
        }
    }

    /**
     * Disable the respect of enable fields in defaultQuerySettings
     *
     * @return void
     */
    protected function disableRespectOfEnableFields()
    {
        if (!self::$defaultQuerySettingsInstance) {
            /** @var $querySettings Typo3QuerySettings */
            self::$defaultQuerySettingsInstance = GeneralUtility::makeInstance(Typo3QuerySettings::class);
            self::$defaultQuerySettingsInstance->setIgnoreEnableFields(true)->setIncludeDeleted(true);
        }
        $this->setDefaultQuerySettings(self::$defaultQuerySettingsInstance);
    }

    /**
     * Walk through the fields and section fields to fill them
     *
     * @param Dce $dce
     * @param array $fieldList Field list. Key must contain field variable, value its value.
     * @param array $contentObject
     * @return void
     */
    protected function processFillingFields(
        Dce $dce,
        array $contentObject,
        array $fieldList = null
    ) {
        $fieldList = $fieldList ?: [];
        foreach ($fieldList as $fieldVariable => $fieldValue) {
            $dceField = $dce->getFieldByVariable($fieldVariable);
            if ($dceField) {
                if (\is_array($fieldValue)) {
                    $i = 0;
                    foreach ($fieldValue as $key => $sectionFieldValues) {
                        $sectionFieldValues = current($sectionFieldValues);
                        
                        // Check if $sectionFieldValues is empty - if so, go to next
                        if (!empty($sectionFieldValues)) {
                            foreach ($sectionFieldValues as $sectionFieldVariable => $sectionFieldValue) {
                                $sectionField = $dceField->getSectionFieldByVariable($sectionFieldVariable);
                                if ($sectionField instanceof DceField) {
                                    $xmlIdent = $dce->getUid() . '-' . $dceField->getVariable() . '-' .
                                        $sectionField->getVariable();
                                    $this->fillFields(
                                        $sectionField,
                                        $sectionFieldValue,
                                        $xmlIdent,
                                        true,
                                        $contentObject,
                                        $i
                                    );
                                }
                            }
                            $i++;
                        }
                    }
                } else {
                    $xmlIdent = $dce->getUid() . '-' . $dceField->getVariable();
                    $this->fillFields($dceField, $fieldValue, $xmlIdent, false, $contentObject);
                }
            }
        }
    }

    /**
     * Fills the value of given field. If field has special properties some
     * objects or database operations will be do,if not just the given
     * $fieldValue will be add to $dceField->_value. Value of sectionFields
     * will be filled differently.
     *
     * @param DceField $dceField
     * @param string $fieldValue
     * @param string $xmlIdentifier
     * @param bool $isSectionField
     * @param array $contentObject
     * @param int $sectionFieldIndex
     * @return void
     */
    protected function fillFields(
        DceField $dceField,
        $fieldValue,
        $xmlIdentifier,
        $isSectionField = false,
        $contentObject = [],
        $sectionFieldIndex = 0
    ) {

        $xmlWrapping = 'xml-' . $xmlIdentifier;
        $dceFieldConfiguration = GeneralUtility::xml2array(
            '<' . $xmlWrapping . '>' . $dceField->getConfiguration() . '</' . $xmlWrapping . '>'
        );

        if (\is_array($dceFieldConfiguration)) {
            $dceFieldConfiguration = $dceFieldConfiguration['config'];
            if ($dceFieldConfiguration['dce_load_schema'] && $this->hasRelatedObjects($dceFieldConfiguration)) {
                $objects = $this->createObjectsByFieldConfiguration(
                    $fieldValue,
                    $dceFieldConfiguration,
                    $contentObject
                );
            }
            if (isset($objects) && $dceFieldConfiguration['dce_get_first']) {
                $objects = current($objects);
            }
        }
        if ($isSectionField === false) {
            if (isset($objects)) {
                $dceField->setValue($objects);
            } else {
                $dceField->setValue($fieldValue);
            }
        } else {
            $sectionFieldValues = $dceField->getValue();
            if (!\is_array($sectionFieldValues)) {
                $sectionFieldValues = [];
            }

            if (isset($objects)) {
                $sectionFieldValues[$sectionFieldIndex] = $objects;
            } else {
                $sectionFieldValues[$sectionFieldIndex] = $fieldValue;
            }
            $dceField->setValue($sectionFieldValues);
        }
    }

    /**
     * Detects fields
     *
     * @param array $record
     * @return array The record with DCE attributes
     */
    protected function getDceFieldsByRecord(array $record)
    {
        $flexformData = static::$flexFormService->convertFlexFormContentToArray($record['pi_flexform'], 'lDEF', 'vDEF');
        return isset($flexformData['settings']) && \is_array($flexformData['settings'])
            ? $flexformData['settings']
            : [];
    }

    /**
     * Flatten the given array and extract all vDEF values. Result is stored
     * in $this->dceProperties.
     *
     * @param array $array flexform data array
     * @param Object $caller
     * @param string|null $arrayKey
     * @return void
     * @deprecated Use "FlexFormService" class instead.
     */
    public function getVdefValues(array $array, $caller = null, $arrayKey = null)
    {
        GeneralUtility::deprecationLog(
            __CLASS__ . '::' . __METHOD__ . ' is deprecated. Use "FlexFormService" class instead'
        );
    }

    /**
     * Extracts and returns the uid from given DCE CType.
     * Returns FALSE if CType is not a DCE one.
     *
     * @param string|array $cType
     * @return int|string|bool
     * @static
     */
    public static function extractUidFromCtype($cType)
    {
        if (\is_array($cType)) {
            // For any reason the CType can be an array with one entry
            $cType = reset($cType);
        }
        if (strpos($cType, 'dceuid') === 0) {
            return (int) substr($cType, 6);
        }
        if (strpos($cType, 'dce_dceuid') === 0) {
            return (int) substr($cType, 10);
        }
        if (strpos($cType, 'dce_') === 0) {
            return substr($cType, 4);
        }
        return false;
    }

    /**
     * Converts a given dce uid to a dce CType.
     *
     * @param int $uid
     * @return string|bool Returns converted CType. If given uid is invalid
     *                     returns FALSE
     * @static
     */
    public static function convertUidToCtype($uid)
    {
        $uid = (int) $uid;
        if ($uid === 0) {
            return false;
        }
        return 'dce_dceuid' . $uid;
    }

    /**
     * Checks if given field configuration allows to load sub items
     * (assoc array or objects)
     *
     * @param array $fieldConfiguration
     * @return bool
     */
    protected function hasRelatedObjects(array $fieldConfiguration)
    {
        return \in_array($fieldConfiguration['type'], ['group', 'inline', 'select'])
        && (($fieldConfiguration['type'] === 'select' && !empty($fieldConfiguration['foreign_table']))
            || ($fieldConfiguration['type'] === 'inline' && !empty($fieldConfiguration['foreign_table']))
            || ($fieldConfiguration['type'] === 'group' && !empty($fieldConfiguration['allowed'])));
    }

    /**
     * Creates array of assoc array or objects, depending
     * on given field configuration
     *
     * @param string $fieldValue Comma separated list of uids
     * @param array $dceFieldConfiguration
     * @param array $contentObject Content object (required by FAL viewhelper)
     * @return array
     */
    protected function createObjectsByFieldConfiguration($fieldValue, array $dceFieldConfiguration, $contentObject)
    {
        $objects = [];

        $objectManager = new \TYPO3\CMS\Extbase\Object\ObjectManager();

        if ($dceFieldConfiguration['type'] === 'group') {
            $className = $dceFieldConfiguration['allowed'];
            $tableNames = GeneralUtility::trimExplode(',', $dceFieldConfiguration['allowed'], true);
        } else {
            $className = $dceFieldConfiguration['foreign_table'];
            $tableNames = GeneralUtility::trimExplode(',', $dceFieldConfiguration['foreign_table'], true);
        }

        $specialClass = null;
        if ($dceFieldConfiguration['dce_load_entity_class']) {
            $className = $dceFieldConfiguration['dce_load_entity_class'];
        } else {
            while (strpos($className, '_') !== false) {
                $position = strpos($className, '_') + 1;
                $className = substr($className, 0, $position - 1) . '-' . strtoupper(substr($className, $position, 1)) .
                    substr($className, $position + 1);
            }

            $className = str_replace('-', '_', $className);
            $className{0} = strtoupper($className{0});
        }
        if ($dceFieldConfiguration['dce_get_fal_objects'] && strtolower($className) === 'sys_file') {
            $className = \TYPO3\CMS\Core\Resource\File::class;
        }

        if ($dceFieldConfiguration['dce_get_fal_objects'] && strtolower($className) === 'sys_file_reference') {
            $contentObjectUid = (int) ($contentObject['_LOCALIZED_UID'] ?? $contentObject['uid']);
            if (TYPO3_MODE === 'FE') {
                $fileRepository = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
                    \TYPO3\CMS\Core\Resource\FileRepository::class
                );
                $fileReferences = $fileRepository->findByRelation(
                    'tt_content',
                    $dceFieldConfiguration['foreign_match_fields']['fieldname'],
                    $contentObjectUid
                );
            } else {
                /** @var $relationHandler \TYPO3\CMS\Core\Database\RelationHandler */
                $relationHandler = GeneralUtility::makeInstance(\TYPO3\CMS\Core\Database\RelationHandler::class);
                $relationHandler->start(
                    '',
                    'sys_file_reference',
                    '',
                    $contentObjectUid,
                    'tt_content',
                    $dceFieldConfiguration
                );
                if (!empty($relationHandler->tableArray['sys_file_reference'])) {
                    $referenceUids = $relationHandler->tableArray['sys_file_reference'];
                }
                if (!empty($referenceUids)) {
                    /** @var \TYPO3\CMS\Core\Resource\ResourceFactory $fileFactory */
                    $fileFactory = GeneralUtility::makeInstance(\TYPO3\CMS\Core\Resource\ResourceFactory::class);
                    foreach ($referenceUids as $referenceUid) {
                        $fileReferenceData = \TYPO3\CMS\Backend\Utility\BackendUtility::getRecordWSOL(
                            'sys_file_reference',
                            $referenceUid
                        );
                        if ($fileReferenceData) {
                            if ($fileReferenceData['t3ver_label'] !== 'DELETED!' &&
                                $fileReferenceData['hidden'] != '1' &&
                                $fileReferenceData['deleted'] != '1'
                            ) {
                                $fileReferences[] = $fileFactory->createFileReferenceObject($fileReferenceData);
                            }
                        }
                    }
                }
            }
            return $fileReferences;
        }

        if (strstr($className, '\\') === false) {
            $repositoryName = str_replace('_Model_', '_Repository_', $className) . 'Repository';
        } else {
            $repositoryName = str_replace('\\Model\\', '\\Repository\\', $className) . 'Repository';
        }
        if (strtolower($className) === 'sys_file_collection') {
            $specialClass = 'FileCollection';
            $className = \TYPO3\CMS\Core\Resource\Collection\AbstractFileCollection::class;
            $repositoryName = \TYPO3\CMS\Core\Resource\FileCollectionRepository::class;
        }

        if (class_exists($className) && class_exists($repositoryName)) {
            // Extbase object found
            /** @var $repository \TYPO3\CMS\Extbase\Persistence\Repository */
            $repository = $objectManager->get($repositoryName);

            foreach (GeneralUtility::trimExplode(',', $fieldValue, true) as $uid) {
                $uid = (int)$uid;
                $object = $repository->findByUid($uid);
                if ($specialClass === 'FileCollection') {
                    $object->loadContents();
                }
                $objects[] = $object;
            }
            return $objects;
        }
        // No class found... load DB record and return assoc
        foreach (GeneralUtility::trimExplode(',', $fieldValue, true) as $uid) {
            $enableFields = '';

            if (\count($tableNames) === 1) {
                $uid = (int) $uid;
                $tableName = $tableNames[0];
            } else {
                $position = strripos($uid, '_');
                $tableName = substr($uid, 0, $position);
                $uid = (int) substr($uid, $position + 1);
            }

            if (empty($tableName)) {
                continue;
            }
            if (!$dceFieldConfiguration['dce_ignore_enablefields']) {
                $enableFields = DatabaseUtility::getEnabledFields($tableName);
            }

            $recordRows = DatabaseUtility::getDatabaseConnection()->exec_SELECTgetRows(
                '*',
                $tableName,
                'uid = ' . $uid . $enableFields
            );

            $pageRepository = $GLOBALS['TSFE']->sys_page;
            if ($dceFieldConfiguration['dce_enable_autotranslation']) {
                if (!$pageRepository instanceof \TYPO3\CMS\Frontend\Page\PageRepository) {
                    /** @var \TYPO3\CMS\Frontend\Page\PageRepository $pageRepository */
                    $pageRepository = GeneralUtility::makeInstance(\TYPO3\CMS\Frontend\Page\PageRepository::class);
                }
            }
            foreach ($recordRows as $row) {
                if ($dceFieldConfiguration['dce_enable_autotranslation']) {
                    if ($tableName === 'pages') {
                        $row = $pageRepository->getPageOverlay($row);
                    } else {
                        $row = $pageRepository->getRecordOverlay(
                            $tableName,
                            $row,
                            $GLOBALS['TSFE']->sys_language_uid,
                            $GLOBALS['TSFE']->tmpl->setup['config.']['sys_language_overlay']
                        );
                    }
                }

                // Add field with tableName
                $row['_table'] = $tableName;

                $dceUid = static::extractUidFromCtype($row['CType']);
                if ($dceUid !== false) {
                    $objects[] = $this->findAndBuildOneByUid(
                        $dceUid,
                        $this->getDceFieldsByRecord($row),
                        $row
                    );
                } else {
                    $objects[] = $row;
                }
            }
        }
        return $objects;
    }

    /**
     * Resolves relations of tt_content row record stored in {contentObject}
     * It resolves: media, assets and categories
     *
     * @param array $contentObjectArray which contains
     * @return array Processed content object array
     */
    protected function resolveContentObjectRelations(array $contentObjectArray)
    {
        /** @var \TYPO3\CMS\Core\Resource\FileRepository $fileRepository */
        $fileRepository = GeneralUtility::makeInstance(\TYPO3\CMS\Core\Resource\FileRepository::class);
        $databaseConnection = DatabaseUtility::getDatabaseConnection();
        $processedContentObject = $contentObjectArray;

        // Resolve media field
        $processedContentObject['media'] = $fileRepository->findByRelation(
            'tt_content',
            'media',
            $contentObjectArray['uid']
        );

        // Resolve assets field (if fluid_styled_content is installed)
        if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('fluid_styled_content')) {
            $processedContentObject['assets'] = $fileRepository->findByRelation(
                'tt_content',
                'assets',
                $contentObjectArray['uid']
            );
        }

        // Resolve categories
        if (array_key_exists('categories', $processedContentObject)) {
            /** @var \TYPO3\CMS\Extbase\Object\ObjectManager $objectManager */
            $objectManager = GeneralUtility::makeInstance(\TYPO3\CMS\Extbase\Object\ObjectManager::class);
            /** @var \TYPO3\CMS\Extbase\Domain\Repository\CategoryRepository $categoryRepository */
            $categoryRepository = $objectManager->get(\TYPO3\CMS\Extbase\Domain\Repository\CategoryRepository::class);

            $res = $databaseConnection->exec_SELECT_mm_query(
                'sys_category.uid',
                'sys_category',
                'sys_category_record_mm',
                'tt_content',
                'AND sys_category_record_mm.tablenames="tt_content" ' .
                'AND sys_category_record_mm.fieldname="categories" ' .
                'AND sys_category_record_mm.uid_foreign=' . $contentObjectArray['uid']
            );
            $processedContentObject['categories'] = [];
            foreach ($res as $categoryRow) {
                $category = $categoryRepository->findByUid($categoryRow['uid']);
                if ($category instanceof \TYPO3\CMS\Extbase\Domain\Model\Category) {
                    $processedContentObject['categories'][] = $categoryRepository->findByUid($categoryRow['uid']);
                }
            }
        }
        return $processedContentObject;
    }
}
