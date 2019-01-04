plugin.tx_albumgallery_album {
	view {
		templateRootPaths.0 = EXT:album_gallery/Resources/Private/Templates/
		templateRootPaths.1 = {$plugin.tx_albumgallery_album.view.templateRootPath}
		partialRootPaths.0 = EXT:album_gallery/Resources/Private/Partials/
		partialRootPaths.1 = {$plugin.tx_albumgallery_album.view.partialRootPath}
		layoutRootPaths.0 = EXT:album_gallery/Resources/Private/Layouts/
		layoutRootPaths.1 = {$plugin.tx_albumgallery_album.view.layoutRootPath}
		widget.DRC\AlbumGallery\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = EXT:album_gallery/Resources/Private/Templates/
	}
	persistence {
		#storagePid = {$plugin.tx_albumgallery_album.persistence.storagePid}
		storagePid >
		#recursive = 1
	}
	features {
		#skipDefaultArguments = 1
		# if set to 1, the enable fields are ignored in BE context
		ignoreAllEnableFieldsInBe = 0
		# Should be on by default, but can be disabled if all action in the plugin are uncached
		requireCHashArgumentForActionArguments = 1
	}
	mvc {
		#callDefaultActionIfActionCantBeResolved = 1
	}
	settings{
		imageWidth = 200
		imageHeight = 200
		hidePagination = 1
		itemsPerPage = 6
	}
}
page.includeCSS{
    fancy = EXT:album_gallery/Resources/Public/css/fancy.css
    custom = EXT:album_gallery/Resources/Public/css/custom.css
}
page.includeJSFooter {
    fancy = EXT:album_gallery/Resources/Public/js/fancy.js
    custom = EXT:album_gallery/Resources/Public/js/custom.js
}

# these classes are only used in auto-generated templates
plugin.tx_albumgallery._CSS_DEFAULT_STYLE (
	textarea.f3-form-error {
		background-color:#FF9F9F;
		border: 1px #FF0000 solid;
	}

	input.f3-form-error {
		background-color:#FF9F9F;
		border: 1px #FF0000 solid;
	}

	.tx-album-gallery table {
		border-collapse:separate;
		border-spacing:10px;
	}

	.tx-album-gallery table th {
		font-weight:bold;
	}

	.tx-album-gallery table td {
		vertical-align:top;
	}

	.typo3-messages .message-error {
		color:red;
	}

	.typo3-messages .message-ok {
		color:green;
	}
)

