<?php
namespace DRC\AlbumGallery\Domain\Repository;

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
 * The repository for Galleries
 */
class GalleryRepository extends \TYPO3\CMS\Extbase\Persistence\Repository {
	public function findByAlbum($id) {
		$query = $this->createQuery();
		$query->matching(
			$query->equals("album", $id)
		);
		return $query->execute();
	}
}
