<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;

class CategoryController extends AbstractController
{
    /**
     * @Route("/category/{category}", name="category")
     */
    public function index(Category $category)
    {
        $repository = $this->getDoctrine()->getRepository(Category::class);
        $category = $repository->findOneBy([
            'name' => $category
        ]);
        $products = $category->getProducts();

        return $this->render('category/index.html.twig', [
            'controller_name' => 'CategoryController',
            'products' => $products
        ]);
    }
}

// Liste des produits de telle cat