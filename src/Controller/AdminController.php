<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Request;
// use Symfony\Component\HttpFoundation\JsonResponse;

class AdminController extends AbstractController
{
  private $data;

  function __construct() 
  {
      $this->data = [];
  }

  public function index()
  {
    return $this->render("admin/layout.html.twig", $this->data);
  }
}