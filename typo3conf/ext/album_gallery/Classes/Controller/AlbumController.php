<?php
namespace DRC\AlbumGallery\Controller;

/***
 *
 * This file is part of the "Album Gallery" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018
 *
 ***/

/**gallery
 * AlbumController
 */
class AlbumController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {
	/**
	 * albumRepository
	 *
	 * @var \DRC\AlbumGallery\Domain\Repository\AlbumRepository
	 * @inject
	 */
	protected $albumRepository = null;

	/**
	 * galleryRepository
	 *
	 * @var \DRC\AlbumGallery\Domain\Repository\GalleryRepository
	 * @inject
	 */
	protected $galleryRepository = null;

	/**
	 * imagesRepository
	 *
	 * @var \DRC\AlbumGallery\Domain\Repository\ImagesRepository
	 * @inject
	 */
	protected $imagesRepository = null;

	/**
	 * action list
	 *
	 * @return void
	 */
	public function listAction() {
		$albums = $this->albumRepository->findAll();
		$this->view->assign('albums', $albums);
	}

	/**
	 * action show
	 *
	 * @param \DRC\AlbumGallery\Domain\Model\Album $album
	 * @return void
	 */
	public function showAction(\DRC\AlbumGallery\Domain\Model\Album $album) {
		$uidAlbum = $album->getUid();
		$gallery = $this->galleryRepository->findByAlbum($uidAlbum);
		$this->view->assign('galleries', $gallery);
		$bredcrumb = $album->getName();
		$this->view->assign('bredcrumb', $bredcrumb);
		$this->view->assign('album', $album);
	}

	/**
	 * action showGallery
	 *
	 * @param \DRC\AlbumGallery\Domain\Model\Gallery $gallery
	 * @return void
	 */
	public function showGalleryAction(\DRC\AlbumGallery\Domain\Model\Gallery $gallery) {
		$uidGallery = $gallery->getUid();
		$images = $this->imagesRepository->findByGallery($uidGallery);
		$this->view->assign('images', $images);
		$uid = $gallery->getUid();
		$albums = $this->albumRepository->findAll();
		foreach ($albums as $album) {
			$galleryArr = $album->getGallery();
			foreach ($galleryArr as $galleryUid) {
				$result = $galleryUid->getUid();
				if ($uid == $result) {
					$bredcrumb = $album->getName();
					$this->view->assign('album', $album);
					$this->view->assign('gallery', $gallery);
					$this->view->assign('bredcrumb', $bredcrumb);
				}
			}
		}
		$bredcrumbName = $gallery->getName();
		$this->view->assign('bredcrumbName', $bredcrumbName);
	}

}
