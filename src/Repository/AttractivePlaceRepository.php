<?php

namespace App\Repository;

use App\Entity\AttractivePlace;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AttractivePlace|null find($id, $lockMode = null, $lockVersion = null)
 * @method AttractivePlace|null findOneBy(array $criteria, array $orderBy = null)
 * @method AttractivePlace[]    findAll()
 * @method AttractivePlace[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttractivePlaceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AttractivePlace::class);
    }

    public function transform(Product $data)
    {
        return [
            "id" => $data->getId(),
            "name" => $data->getName(),
            "country" => $data->getCountry(),
            "images" => $data->getImages(),
            "status" => $data->getStatus(),
            "createdAt" => $data->getCreatedAt(),
            "updatedAt" => $data->getUpdatedAt(),
            "deletedAt" => $data->getDeletedAt(),
        ];
    }

    public function transformAll($data)
    {
        $dataArray = array();

        foreach ($data as $row)
        {
            $dataArray[] = $this->transform($row);
        }

        return $dataArray;
    }

    // /**
    //  * @return AttractivePlace[] Returns an array of AttractivePlace objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AttractivePlace
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
