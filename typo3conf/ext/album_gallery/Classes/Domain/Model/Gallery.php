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
 * Gallery
 */
class Gallery extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {
	/**
	 * name
	 *
	 * @var string
	 */
	protected $name = '';

	/**
	 * images
	 *
	 * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\DRC\AlbumGallery\Domain\Model\Images>
	 * @cascade remove
	 */
	protected $images = null;

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
		$this->images = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
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
	 * Adds a Images
	 *
	 * @param \DRC\AlbumGallery\Domain\Model\Images $images
	 * @return void
	 */
	public function addImages(\DRC\AlbumGallery\Domain\Model\Images $images) {
		$this->images->attach($images);
	}

	/**
	 * Removes a Images
	 *
	 * @param \DRC\AlbumGallery\Domain\Model\Images $imagesToRemove The Images to be removed
	 * @return void
	 */
	public function removeImages(\DRC\AlbumGallery\Domain\Model\Images $imagesToRemove) {
		$this->images->detach($imagesToRemove);
	}

	/**
	 * Returns the images
	 *
	 * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\DRC\AlbumGallery\Domain\Model\Images> $images
	 */
	public function getImages() {
		return $this->images;
	}

	/**
	 * Sets the images
	 *
	 * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\DRC\AlbumGallery\Domain\Model\Images> $images
	 * @return void
	 */
	public function setImages(\TYPO3\CMS\Extbase\Persistence\ObjectStorage $images) {
		$this->images = $images;
	}
}
