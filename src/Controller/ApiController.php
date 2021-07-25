<?php

namespace App\Controller;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends AbstractFOSRestController
{
    /**
     * @var integer HTTP status code - 200 (OK) by default
     */
    protected $statusCode = 200;

    /**
     * Gets the value of statusCode
     * @return integer
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Sets the value of statusCode
     * @param integer $statusCode the status code
     * @return self
     */
    protected function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;

        return $this;
    }

    /**
     * Returns a JSON response
     * @param array $data
     * @param array $headers
     * @return Response
     */
    public function respond($content, $headers = [])
    {
        $data = [
            "code" => $this->getStatusCode(),
            "message" => "Successful operation",
            "content" => $content
        ];

        return $this->view($data, $this->getStatusCode(), $headers);
    }

    /**
     * Sets an error message and returns a JSON response
     * @param string $errors
     * @return Response
     */
    public function respondWithErrors($errors, $headers = [])
    {
        $data = [
            "code" => $this->getStatusCode(),
            "message" => $errors,
            "content" => [],
        ];

        return $this->view($data, $this->getStatusCode(), $headers);
    }

    /**
     * Returns a 422 Unprocessable Entity
     * @param string $message
     * @return Response
     */
    public function respondValidationError($message = "Validation errors")
    {
        return $this->setStatusCode(422)->respondWithErrors($message);
    }

    /**
     * Returns a 404 Not Found
     * @param string $message
     * @return Response
     */
    public function respondNotFound($message = "Not found!")
    {
        return $this->setStatusCode(404)->respondWithErrors($message);
    }

    /**
     * Returns a 201 Created
     * @param array $data
     * @return Response
     */
    public function respondCreated($data = [])
    {
        return $this->setStatusCode(201)->respond($data);
    }

    /**
    * Returns a 202 Accepted
    * @param array $data
    * @return Response
    */
    public function respondAccepted($data = [])
    {
        return $this->setStatusCode(202)->respond($data);
    }

    // this method allows us to accept JSON payloads in POST requests 
    // since Symfony 4 doesn’t handle that automatically:
    protected function transformJsonBody(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return null;
        }

        if ($data === null) {
            return $request;
        }

        $request->request->replace($data);
        
        return $request;
    }
}