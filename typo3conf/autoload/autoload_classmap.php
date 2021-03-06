<?php

// autoload_classmap.php @generated by TYPO3

$typo3InstallDir = \TYPO3\CMS\Core\Core\Environment::getPublicPath() . '/';

return array(
    'ArminVieweg\\Dce\\Components\\BackendView\\SimpleBackendView' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Components/BackendView/SimpleBackendView.php',
    'ArminVieweg\\Dce\\Components\\DceContainer\\Container' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Components/DceContainer/Container.php',
    'ArminVieweg\\Dce\\Components\\DceContainer\\ContainerFactory' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Components/DceContainer/ContainerFactory.php',
    'ArminVieweg\\Dce\\Components\\FlexformToTcaMapper\\Mapper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Components/FlexformToTcaMapper/Mapper.php',
    'ArminVieweg\\Dce\\Controller\\DceController' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Controller/DceController.php',
    'ArminVieweg\\Dce\\Controller\\DceModuleController' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Controller/DceModuleController.php',
    'ArminVieweg\\Dce\\Domain\\Model\\Dce' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Domain/Model/Dce.php',
    'ArminVieweg\\Dce\\Domain\\Model\\DceField' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Domain/Model/DceField.php',
    'ArminVieweg\\Dce\\Domain\\Repository\\DceFieldRepository' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Domain/Repository/DceFieldRepository.php',
    'ArminVieweg\\Dce\\Domain\\Repository\\DceRepository' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Domain/Repository/DceRepository.php',
    'ArminVieweg\\Dce\\Hooks\\AfterSaveHook' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Hooks/AfterSaveHook.php',
    'ArminVieweg\\Dce\\Hooks\\DocHeaderButtonsHook' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Hooks/DocHeaderButtonsHook.php',
    'ArminVieweg\\Dce\\Hooks\\ImportExportHook' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Hooks/ImportExportHook.php',
    'ArminVieweg\\Dce\\Hooks\\KeSearchHook' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Hooks/KeSearchHook.php',
    'ArminVieweg\\Dce\\Hooks\\PageLayoutViewDrawItemHook' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Hooks/PageLayoutViewDrawItemHook.php',
    'ArminVieweg\\Dce\\Injector' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Injector.php',
    'ArminVieweg\\Dce\\Slots\\LinkAnalyserSlot' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Slots/LinkAnalyserSlot.php',
    'ArminVieweg\\Dce\\Slots\\TablesDefinitionIsBeingBuiltSlot' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Slots/TablesDefinitionIsBeingBuiltSlot.php',
    'ArminVieweg\\Dce\\Updates\\AbstractUpdate' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Updates/AbstractUpdate.php',
    'ArminVieweg\\Dce\\Updates\\FixMalformedDceFieldVariableNamesUpdate' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Updates/FixMalformedDceFieldVariableNamesUpdate.php',
    'ArminVieweg\\Dce\\Updates\\MigrateDceFieldDatabaseRelationUpdate' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Updates/MigrateDceFieldDatabaseRelationUpdate.php',
    'ArminVieweg\\Dce\\Updates\\MigrateFlexformSheetIdentifierUpdate' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Updates/MigrateFlexformSheetIdentifierUpdate.php',
    'ArminVieweg\\Dce\\Updates\\MigrateOldNamespacesInFluidTemplateUpdate' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Updates/MigrateOldNamespacesInFluidTemplateUpdate.php',
    'ArminVieweg\\Dce\\UserFunction\\CustomFieldValidation\\AbstractFieldValidator' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/UserFunction/CustomFieldValidation/AbstractFieldValidator.php',
    'ArminVieweg\\Dce\\UserFunction\\CustomFieldValidation\\LowerCamelCaseValidator' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/UserFunction/CustomFieldValidation/LowerCamelCaseValidator.php',
    'ArminVieweg\\Dce\\UserFunction\\CustomFieldValidation\\NoLeadingNumberValidator' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/UserFunction/CustomFieldValidation/NoLeadingNumberValidator.php',
    'ArminVieweg\\Dce\\UserFunction\\CustomLabels\\DceFieldLabel' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/UserFunction/CustomLabels/DceFieldLabel.php',
    'ArminVieweg\\Dce\\UserFunction\\CustomLabels\\TtContentLabel' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/UserFunction/CustomLabels/TtContentLabel.php',
    'ArminVieweg\\Dce\\UserFunction\\ItemsProcFunc' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/UserFunction/ItemsProcFunc.php',
    'ArminVieweg\\Dce\\UserFunction\\UserFields\\CodemirrorField' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/UserFunction/UserFields/CodemirrorField.php',
    'ArminVieweg\\Dce\\Utility\\DatabaseConnection' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/DatabaseConnection.php',
    'ArminVieweg\\Dce\\Utility\\DatabaseUtility' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/DatabaseUtility.php',
    'ArminVieweg\\Dce\\Utility\\Extbase' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/Extbase.php',
    'ArminVieweg\\Dce\\Utility\\File' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/File.php',
    'ArminVieweg\\Dce\\Utility\\FlashMessage' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/FlashMessage.php',
    'ArminVieweg\\Dce\\Utility\\ForbiddenUtility' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/ForbiddenUtility.php',
    'ArminVieweg\\Dce\\Utility\\LanguageService' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/LanguageService.php',
    'ArminVieweg\\Dce\\Utility\\PageTS' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/PageTS.php',
    'ArminVieweg\\Dce\\Utility\\TypoLinkCodecService' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/TypoLinkCodecService.php',
    'ArminVieweg\\Dce\\Utility\\TypoScript' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/TypoScript.php',
    'ArminVieweg\\Dce\\Utility\\WizardIcon' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/Utility/WizardIcon.php',
    'ArminVieweg\\Dce\\ViewHelpers\\ArrayGetIndexViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/ArrayGetIndexViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Be\\CurrentLanguageViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Be/CurrentLanguageViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Be\\IncludeCssFileViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Be/IncludeCssFileViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Be\\IncludeJsFileViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Be/IncludeJsFileViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Be\\ModuleLinkViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Be/ModuleLinkViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Be\\TableListViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Be/TableListViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Be\\Version\\DceViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Be/Version/DceViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Be\\Version\\Typo3ViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Be/Version/Typo3ViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\ExplodeViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/ExplodeViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\FalViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/FalViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\FileInfoViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/FileInfoViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\AddcslashesViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/AddcslashesViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\CdataViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/CdataViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\ReplaceViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/ReplaceViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\StripslashesViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/StripslashesViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\StrtolowerViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/StrtolowerViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\TinyViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/TinyViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\UcfirstViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/UcfirstViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\Format\\WrapWithCurlyBracesViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/Format/WrapWithCurlyBracesViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\GPViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/GPViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\IsArrayViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/IsArrayViewHelper.php',
    'ArminVieweg\\Dce\\ViewHelpers\\ThisUrlViewHelper' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/ViewHelpers/ThisUrlViewHelper.php',
    'ArminVieweg\\Dce\\XClass\\LiveSearch' => $typo3InstallDir . 'typo3conf/ext/dce/Classes/XClass/LiveSearch.php',
    'DRC\\AlbumGallery\\Controller\\AlbumController' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/Controller/AlbumController.php',
    'DRC\\AlbumGallery\\Domain\\Model\\Album' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/Domain/Model/Album.php',
    'DRC\\AlbumGallery\\Domain\\Model\\Gallery' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/Domain/Model/Gallery.php',
    'DRC\\AlbumGallery\\Domain\\Model\\Images' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/Domain/Model/Images.php',
    'DRC\\AlbumGallery\\Domain\\Repository\\AlbumRepository' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/Domain/Repository/AlbumRepository.php',
    'DRC\\AlbumGallery\\Domain\\Repository\\GalleryRepository' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/Domain/Repository/GalleryRepository.php',
    'DRC\\AlbumGallery\\Domain\\Repository\\ImagesRepository' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/Domain/Repository/ImagesRepository.php',
    'DRC\\AlbumGallery\\ViewHelpers\\PaginateBodytextViewHelper' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/ViewHelpers/PaginateBodytextViewHelper.php',
    'DRC\\AlbumGallery\\ViewHelpers\\Widget\\Controller\\PaginateController' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/ViewHelpers/Widget/Controller/PaginateController.php',
    'DRC\\AlbumGallery\\ViewHelpers\\Widget\\PaginateViewHelper' => $typo3InstallDir . 'typo3conf/ext/album_gallery/Classes/ViewHelpers/Widget/PaginateViewHelper.php',
    'GridElementsTeam\\Gridelements\\Backend\\ItemsProcFuncs\\AbstractItemsProcFunc' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Backend/ItemsProcFuncs/AbstractItemsProcFunc.php',
    'GridElementsTeam\\Gridelements\\Backend\\ItemsProcFuncs\\CTypeList' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Backend/ItemsProcFuncs/CTypeList.php',
    'GridElementsTeam\\Gridelements\\Backend\\ItemsProcFuncs\\ColPosList' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Backend/ItemsProcFuncs/ColPosList.php',
    'GridElementsTeam\\Gridelements\\Backend\\ItemsProcFuncs\\ListTypeList' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Backend/ItemsProcFuncs/ListTypeList.php',
    'GridElementsTeam\\Gridelements\\Backend\\ItemsProcFuncs\\SysLanguageUidList' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Backend/ItemsProcFuncs/SysLanguageUidList.php',
    'GridElementsTeam\\Gridelements\\Backend\\LayoutSetup' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Backend/LayoutSetup.php',
    'GridElementsTeam\\Gridelements\\Backend\\TtContent' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Backend/TtContent.php',
    'GridElementsTeam\\Gridelements\\ContextMenu\\ItemProvider' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/ContextMenu/ItemProvider.php',
    'GridElementsTeam\\Gridelements\\DataHandler\\AbstractDataHandler' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/DataHandler/AbstractDataHandler.php',
    'GridElementsTeam\\Gridelements\\DataHandler\\AfterDatabaseOperations' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/DataHandler/AfterDatabaseOperations.php',
    'GridElementsTeam\\Gridelements\\DataHandler\\PreProcessFieldArray' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/DataHandler/PreProcessFieldArray.php',
    'GridElementsTeam\\Gridelements\\DataHandler\\ProcessCmdmap' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/DataHandler/ProcessCmdmap.php',
    'GridElementsTeam\\Gridelements\\Helper\\Helper' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Helper/Helper.php',
    'GridElementsTeam\\Gridelements\\Hooks\\BackendUtilityGridelements' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Hooks/BackendUtilityGridelements.php',
    'GridElementsTeam\\Gridelements\\Hooks\\DataHandler' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Hooks/DataHandler.php',
    'GridElementsTeam\\Gridelements\\Hooks\\DatabaseRecordList' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Hooks/DatabaseRecordList.php',
    'GridElementsTeam\\Gridelements\\Hooks\\DrawItem' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Hooks/DrawItem.php',
    'GridElementsTeam\\Gridelements\\Hooks\\PageRenderer' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Hooks/PageRenderer.php',
    'GridElementsTeam\\Gridelements\\Hooks\\TtContentFlexForm' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Hooks/TtContentFlexForm.php',
    'GridElementsTeam\\Gridelements\\Hooks\\WizardItems' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Hooks/WizardItems.php',
    'GridElementsTeam\\Gridelements\\Plugin\\Gridelements' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Plugin/Gridelements.php',
    'GridElementsTeam\\Gridelements\\Slots\\ExtTablesInclusionPostProcessing' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Slots/ExtTablesInclusionPostProcessing.php',
    'GridElementsTeam\\Gridelements\\Wizard\\GridelementsBackendLayoutWizardElement' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Wizard/GridelementsBackendLayoutWizardElement.php',
    'GridElementsTeam\\Gridelements\\Xclass\\DatabaseRecordList' => $typo3InstallDir . 'typo3conf/ext/gridelements/Classes/Xclass/DatabaseRecordList.php',
    'TYPO3\\SiteConfig\\Controller\\ContentController' => $typo3InstallDir . 'typo3conf/ext/site_config_grid/Classes/Controller/ContentController.php',
    'TYPO3\\SiteConfig\\ViewHelpers\\ContentViewHelper' => $typo3InstallDir . 'typo3conf/ext/site_config_grid/Classes/ViewHelpers/ContentViewHelper.php',
    'TYPO3\\SiteConfig\\ViewHelpers\\DataProcessorViewHelper' => $typo3InstallDir . 'typo3conf/ext/site_config_grid/Classes/ViewHelpers/DataProcessorViewHelper.php',
    'TYPO3\\SiteConfig\\ViewHelpers\\DataRelationViewHelper' => $typo3InstallDir . 'typo3conf/ext/site_config_grid/Classes/ViewHelpers/DataRelationViewHelper.php',
    'TYPO3\\SiteConfig\\ViewHelpers\\FalViewHelper' => $typo3InstallDir . 'typo3conf/ext/site_config_grid/Classes/ViewHelpers/FalViewHelper.php',
    'TYPO3\\SiteConfig\\View\\BackendLayout\\FileProvider' => $typo3InstallDir . 'typo3conf/ext/site_config_grid/Classes/View/BackendLayout/FileProvider.php',
);
