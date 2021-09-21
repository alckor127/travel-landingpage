<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setName("Francisco");
        $user->setLastName("Rios Vega");
        $user->setEmail("franciscorios0610@gmail.com");
        $user->setPassword($this->encoder->encodePassword($user, '123456'));
        $user->setStatus("ACTIVE"); // ACTIVE - DRAFT - DELETED
        $user->setCreatedAt(new \DateTimeImmutable(date("Y-m-d H:i:s")));
       
        $manager->persist($user);
        $manager->flush();
    }
}
