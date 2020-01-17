<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Entity\Review;
use App\Entity\Product;

class ReviewController extends AbstractController
{
    // Decodes the Request from Json to an array
    //
    public function jsonToArray(Request $request)
    {
        $parametersAsArray = [];
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
        }
        return $parametersAsArray;
    }

    // After the normalization, loops through the Request
    // to see empty fields and returns errors as an array
    //
    public function errorsDetected(Request $request)
    {
        $errors = [];
        foreach($request as $key => $value) {
            if (empty($value)) {
                array_push($errors, "Please enter a value for " . $key);
            }
        }
    }

    /**
     * @Route("/review/product/{id}", name="review")
     */
    public function addReview(Request $request, Product $product)
    {
        $user = $this->getUser();
        $request = $this->jsonToArray($request);
        $errors = $this->errorsDetected($request);

        if (!empty($errors)) {
            return $this->render('review/index.html.twig', [
                'controller_name' => 'ReviewController',
                'errors' => $errors
            ]);
        } else {
            $review = new Review();
            $review->setUser($user);
            $review->setProduct($product);
            $review->setComment($request['comment']);
        }

        return $this->render('review/index.html.twig', [
            'controller_name' => 'ReviewController',
        ]);
    }
}
