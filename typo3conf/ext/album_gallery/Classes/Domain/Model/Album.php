<?php
namespace DRC\AlbumGallery\Domain\Model;

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

/**
 * Album
 */
class Album extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {
	/**
	 * name
	 *
	 * @var string
	 */
	protected $name = '';

	/**
	 * gallery
	 *
	 * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\DRC\AlbumGallery\Domain\Model\Gallery>
	 * @cascade remove
	 */
	protected $gallery = null;

	/**
	 * __construct
	 */
	public function __construct() {
		//Do not remove the next line: It would break the functionality
		$this->initStorageObjects();
	}

	/**
	 * Initializes all ObjectStorage properties
	 * Do not modify this method!
	 * It will be rewritten on each save in the extension builder
	 * You may modify the constructor of this class instead
	 *
	 * @return void
	 */
	protected function initStorageObjects() {
		$this->gallery = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
	}

	/**
	 * Returns the name
	 *
	 * @return string $name
	 */
	public function getName() {
		return $this->name;
	}

	/**
	 * Sets the name
	 *
	 * @param string $name
	 * @return void
	 */
	public function setName($name) {
		$this->name = $name;
	}

	/**
	 * Adds a Gallery
	 *
	 * @param \DRC\AlbumGallery\Domain\Model\Gallery $gallery
	 * @return void
	 */
	public function addGallery(\DRC\AlbumGallery\Domain\Model\Gallery $gallery) {
		$this->gallery->attach($gallery);
	}

	/**
	 * Removes a Gallery
	 *
	 * @param \DRC\AlbumGallery\Domain\Model\Gallery $galleryToRemove The Gallery to be removed
	 * @return void
	 */
	public function removeGallery(\DRC\AlbumGallery\Domain\Model\Gallery $galleryToRemove) {
		$this->gallery->detach($galleryToRemove);
	}

	/**
	 * Returns the gallery
	 *
	 * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\DRC\AlbumGallery\Domain\Model\Gallery> $gallery
	 */
	public function getGallery() {
		return $this->gallery;
	}

	/**
	 * Sets the gallery
	 *
	 * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\DRC\AlbumGallery\Domain\Model\Gallery> $gallery
	 * @return void
	 */
	public function setGallery(\TYPO3\CMS\Extbase\Persistence\ObjectStorage $gallery) {
		$this->gallery = $gallery;
	}
}
