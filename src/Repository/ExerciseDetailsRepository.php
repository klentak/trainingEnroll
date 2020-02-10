<?php

namespace App\Repository;

use App\Entity\ExerciseDetails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ExerciseDetails|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExerciseDetails|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExerciseDetails[]    findAll()
 * @method ExerciseDetails[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExerciseDetailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExerciseDetails::class);
    }

    // /**
    //  * @return ExerciseDetails[] Returns an array of ExerciseDetails objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ExerciseDetails
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
