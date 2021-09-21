<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Doctrine\ORM\EntityManagerInterface;
use App\Controller\ApiController;
use App\Repository\AttractivePlaceRepository;
use App\Entity\AttractivePlace;

class AttractivePlaceController extends ApiController
{
    private $manager;
    private $repository;
    private $now;

    function __construct(EntityManagerInterface $manager, AttractivePlaceRepository $repository)
    {
        $this->manager = $manager;
        $this->repository = $repository;
        $this->now = new \DateTimeImmutable(date("Y-m-d H:i:s"));
    }

    /**
     * List
     * @Rest\Get("/api/attractive-place")
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
     * @Rest\Get("/api/attractive-place/{id}")
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
     * @Rest\Post("/api/attractive-place")
     * 
     * @return JsonResponse
     */
    public function saveAction(Request $request)
    {
        try
        {
            $data = new AttractivePlace();

            $data->setName($request->request->get("name"));
            $data->setCountry($request->request->get("country"));
            $data->setImage($request->request->get("image"));
            $data->setPrice($request->request->get("price"));
            $data->setStars($request->request->get("stars"));
            $data->setStatus($request->request->get("status"));
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
     * @Rest\Post("/api/attractive-place/{id}")
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
            
            $data->setName($request->request->get("name"));
            $data->setCountry($request->request->get("country"));
            $data->setImage($request->request->get("image"));
            $data->setPrice($request->request->get("price"));
            $data->setStars($request->request->get("stars"));
            $data->setStatus($request->request->get("status"));
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
     * @Rest\Delete("/api/attractive-place/{id}")
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