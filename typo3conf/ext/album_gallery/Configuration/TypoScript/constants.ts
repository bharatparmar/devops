plugin.tx_albumgallery_album {
	view {
		# cat=plugin.tx_albumgallery_album/file; type=string; label=Path to template root (FE)
		templateRootPath = EXT:album_gallery/Resources/Private/Templates/
		# cat=plugin.tx_albumgallery_album/file; type=string; label=Path to template partials (FE)
		partialRootPath = EXT:album_gallery/Resources/Private/Partials/
		# cat=plugin.tx_albumgallery_album/file; type=string; label=Path to template layouts (FE)
		layoutRootPath = EXT:album_gallery/Resources/Private/Layouts/
	}
	persistence {
		# cat=plugin.tx_albumgallery_album//a; type=string; label=Default storage PID
		storagePid =
	}
}
