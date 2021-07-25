<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Doctrine\ORM\EntityManagerInterface;
use App\Controller\ApiController;
use App\Repository\UserRepository;
use App\Entity\User;

class UserController extends ApiController
{
    /**
     * List
     * @Rest\Get("/api/user")
     * 
     * @return JsonResponse
     */
    public function listAction()
    {
        try
        {
            // $user = $this->repository->transformAll();

            return $this->respond([
                [
                    "name" => "Francisco",
                    "lastName" => "Rios Vega"
                ],
                [
                    "name" => "Rosario",
                    "lastName" => "Torres Polino"
                ]
            ]);
        }
        catch(\Exception $e)
        {
            return $this->setStatusCode(500)->respondWithErrors($e->getMessage());
        }
    }
}