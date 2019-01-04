<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
	function () {

		\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
			'DRC.AlbumGallery',
			'Album',
			[
				'Album' => 'list, show, showGallery',
			],
			// non-cacheable actions
			[
				'Album' => 'list, show, showGallery',
			]
		);

		// wizards
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
			'mod {
			wizards.newContentElement.wizardItems.plugins {
				elements {
					album {
						iconIdentifier = album_gallery-plugin-album
						title = LLL:EXT:album_gallery/Resources/Private/Language/locallang_db.xlf:tx_album_gallery_album.name
						description = LLL:EXT:album_gallery/Resources/Private/Language/locallang_db.xlf:tx_album_gallery_album.description
						tt_content_defValues {
							CType = list
							list_type = albumgallery_album
						}
					}
				}
				show = *
			}
	   }'
		);

		$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

		$iconRegistry->registerIcon(
			'album_gallery-plugin-album',
			\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
			['source' => 'EXT:album_gallery/Resources/Public/Icons/user_plugin_album.svg']
		);

	}
);
