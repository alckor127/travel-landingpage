<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Controller\ApiController;
use App\Repository\UserRepository;
use App\Entity\User;

class UserController extends ApiController
{
    private $manager;
    private $repository;
    private $now;
    private $encoder;

    function __construct(EntityManagerInterface $manager, UserRepository $repository, UserPasswordEncoderInterface $encoder)
    {
        $this->manager = $manager;
        $this->repository = $repository;
        $this->now = new \DateTimeImmutable(date("Y-m-d H:i:s"));
        $this->encoder = $encoder;
    }

    /**
     * List
     * @Rest\Get("/api/user")
     * 
     * @return JsonResponse
     */
    public function listAction(Request $request)
    {
        try
        {
            $criteria = $request->query->get("criteria");
            // $orderBy = $request->query->get("orderBy") ? $request->query->get("orderBy") : null;
            // $limit = $request->query->get("limit") ? $request->query->get("limit") : false;
            // $offset = $request->query->get("offset") ? $request->query->get("offset") : false;

            $data = $this->repository->findBy($criteria);
            $data = $this->repository->transformAll($data);

            return $this->respond($data);
        }
        catch(\Exception $e)
        {
            return $this->setStatusCode(500)->respondWithErrors($e->getMessage());
        }
    }

    /**
     * Show
     * @Rest\Get("/api/user/{id}")
     * 
     * @return JsonResponse
     */
    public function showAction(int $id)
    {
        try
        {
            $data = $this->repository->find($id);

            // not found
            if (!$data) return $this->respondNotFound();

            $data = $this->repository->transform($data);

            return $this->respond($data);
        }
        catch(\Exception $e)
        {
            return $this->setStatusCode(500)->respondWithErrors($e->getMessage());
        }
    }

    /**
     * Save
     * @Rest\Post("/api/user")
     * 
     * @return JsonResponse
     */
    public function saveAction(Request $request)
    {
        try
        {
            $data = new User();

            $data->setName($request->get("name"));
            $data->setLastName($request->get("lastName"));
            $data->setEmail($request->get("email"));
            $data->setPassword($this->encoder->encodePassword($data, $request->get("password")));
            $data->setStatus($request->get("status")); // ACTIVE - DRAFT - DELETED
            $data->setCreatedAt($this->now);

            $this->manager->persist($data);
            $this->manager->flush();

            $data = $this->repository->transform($data);

            return $this->respondCreated($data);
        }
        catch(\Exception $e)
        {
            return $this->setStatusCode(500)->respondWithErrors($e->getMessage());
        }
    }

    /**
     * Edit
     * @Rest\Post("/api/user/{id}")
     * 
     * @return JsonResponse
     */
    public function editAction(int $id, Request $request)
    {
        try
        {
            $data = $this->repository->find($id);

            // not found
            if (!$data) return $this->respondNotFound();
            
            $data->setName($request->get("name"));
            $data->setLastName($request->get("lastName"));
            $data->setEmail($request->get("email"));
            if ($request->get("password"))
            {
                $data->setPassword($this->encoder->encodePassword($data, $request->get("password")));
            }            
            $data->setStatus($request->get("status")); // ACTIVE - DRAFT - DELETED
            $data->setUpdatedAt($this->now);

            $this->manager->flush();

            $data = $this->repository->transform($data);

            return $this->respondAccepted($data);
        }
        catch(\Exception $e)
        {
            return $this->setStatusCode(500)->respondWithErrors($e->getMessage());
        }
    }

    /**
     * Remove
     * @Rest\Delete("/api/user/{id}")
     * 
     * @return JsonResponse
     */
    public function removeAction(int $id)
    {
        try
        {
            $data = $this->repository->find($id);

            // not found
            if (!$data) return $this->respondNotFound();

            $data->setStatus("REMOVED");
            $data->setDeletedAt($this->now);

            $this->manager->flush();

            $data = $this->repository->transform($data);

            return $this->respond($data);
        }
        catch(\Exception $e)
        {
            return $this->setStatusCode(500)->respondWithErrors($e->getMessage());
        }
    }
}