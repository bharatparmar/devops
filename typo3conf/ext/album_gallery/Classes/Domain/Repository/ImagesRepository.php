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
 * The repository for Images
 */
class ImagesRepository extends \TYPO3\CMS\Extbase\Persistence\Repository {
	public function findByGallery($id) {
		$query = $this->createQuery();
		$query->matching(
			$query->equals("gallery", $id)
		);
		return $query->execute();
	}
}
