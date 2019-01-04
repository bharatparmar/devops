<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
	function () {

		\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
			'DRC.AlbumGallery',
			'Album',
			'Album Gallery'
		);

		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('album_gallery', 'Configuration/TypoScript', 'Album Gallery');

		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_albumgallery_domain_model_album', 'EXT:album_gallery/Resources/Private/Language/locallang_csh_tx_albumgallery_domain_model_album.xlf');
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_albumgallery_domain_model_album');

		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_albumgallery_domain_model_gallery', 'EXT:album_gallery/Resources/Private/Language/locallang_csh_tx_albumgallery_domain_model_gallery.xlf');
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_albumgallery_domain_model_gallery');

		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_albumgallery_domain_model_images', 'EXT:album_gallery/Resources/Private/Language/locallang_csh_tx_albumgallery_domain_model_images.xlf');
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_albumgallery_domain_model_images');

	}
);
