<?php
defined('TYPO3_MODE') or die();

$GLOBALS['TCA']['tt_content']['columns']['media']['config']['maxitems'] = 30;
$GLOBALS['TCA']['tt_content']['columns']['media']['config']['size'] = 30;

$frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';

// Banner
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	array(
		'Teaser',
		'fce_teaser'
	),
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_teaser'] = array(
	'showitem' => '
	--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
	--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,bodytext',
);

$GLOBALS['TCA']['tt_content']['types']['fce_teaser']['columnsOverrides'] = ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']];


