<?php

/*  | This extension is made for TYPO3 CMS and is licensed
 *  | under GNU General Public License.
 *  |
 *  | (c) 2012-2018 Armin Vieweg <armin@v.ieweg.de>
 */

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

$boot = function ($extensionKey) {
    $extensionIconPath = 'EXT:' . $extensionKey . '/Resources/Public/Icons/ext_icon.svg';

    // Register backend module
    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
        'ArminVieweg.' . $extensionKey,
        'tools',
        'dceModule',
        '',
        [
            'DceModule' => 'index,clearCaches,hallOfFame,updateTcaMappings',
            'Dce' => 'renderPreview'
        ],
        [
            'access' => 'user,group',
            'icon' => $extensionIconPath,
            'labels' => 'LLL:EXT:' . $extensionKey . '/Resources/Private/Language/locallang_mod.xml',
        ]
    );

    // Register PageTS defaults
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('tx_dce.defaults {
        simpleBackendView {
            titleCropLength = 10
            titleCropAppendix = ...

            imageWidth = 50c
            imageHeight = 50c

            containerGroupColors {
                10 = #0079BF
                11 = #D29034
                12 = #519839
                13 = #B04632
                14 = #838C91
                15 = #CD5A91
                16 = #4BBF6B
                17 = #89609E
                18 = #00AECC
                19 = #ED2448
                20 = #FF8700
            }
        }
    }');

    if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('linkvalidator')) {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod.linkvalidator.searchFields.tt_content := addToList(pi_flexform)'
        );
    }

    /** @var \TYPO3\CMS\Core\Imaging\IconRegistry $iconRegistry */
    $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
    // DCE Icon
    $iconRegistry->registerIcon(
        'ext-dce-dce',
        \TYPO3\CMS\Core\Imaging\IconProvider\BitmapIconProvider::class,
        ['source' => 'EXT:dce/Resources/Public/Icons/ext_icon.png']
    );
    // DCE Field Type Icons
    $iconRegistry->registerIcon(
        'ext-dce-dcefield-type-element',
        \TYPO3\CMS\Core\Imaging\IconProvider\BitmapIconProvider::class,
        ['source' => 'EXT:dce/Resources/Public/Icons/tx_dce_domain_model_dcefield_element.png']
    );
    $iconRegistry->registerIcon(
        'ext-dce-dcefield-type-tab',
        \TYPO3\CMS\Core\Imaging\IconProvider\BitmapIconProvider::class,
        ['source' => 'EXT:dce/Resources/Public/Icons/tx_dce_domain_model_dcefield_tab.png']
    );
    $iconRegistry->registerIcon(
        'ext-dce-dcefield-type-section',
        \TYPO3\CMS\Core\Imaging\IconProvider\BitmapIconProvider::class,
        ['source' => 'EXT:dce/Resources/Public/Icons/tx_dce_domain_model_dcefield_section.png']
    );
};

$boot($_EXTKEY);
unset($boot);
