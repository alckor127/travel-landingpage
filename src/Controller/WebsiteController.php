<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class WebsiteController extends AbstractController
{
  private $data;

  function __construct() 
  {
      $this->data = [];
  }

  public function index()
  {
    return $this->render("website/layout.html.twig", $this->data);
  }
}