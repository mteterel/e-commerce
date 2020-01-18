<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Entity\ProductImage;
use App\Entity\ProductSpec;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    /**
     * @Route("/categories/{slug}/products", methods={"GET"})
     * @param Category $category
     * @return JsonResponse
     */
    public function getProducts(Category $category)
    {
        $productsArray = $category->getProducts()->map(function(Product $p) {
            $images = $p->getImages()->map(function (ProductImage $pi) {
                return $pi->getUrl();
            });

            $specs = array_reduce($p->getProductSpecs()->toArray(), function ($carry, ProductSpec $spec) {
                $carry[$spec->getSpec()->getName()] = $spec->getValue();
                return $carry;
            }, []);

            return [
                "id" => $p->getId(),
                "name" => $p->getName(),
                "price" => $p->getPrice(),
//                "shortDescription" => $p->getShortDescription(),
//                "advancedDescription" => $p->getAdvancedDescription(),
                "specs" => $specs,
                "images" => $images
            ];
        });

        return $this->json([
            "categoryName" => $category->getName(),
            "productsCount" => count($productsArray),
            "products" => $productsArray
        ]);
    }

    /**
     * @Route("/categories/{slug}/filters")
     * @param Category $category
     * @return JsonResponse
     */
    public function getFilters(Category $category)
    {
        $filters = [];

        $products = $category->getProducts()->toArray();
        foreach($products as $p) {
            $specs = $p->getProductSpecs();
            foreach($specs as $value) {
                $key = $value->getSpec()->getName();
                $filters[$key] = array_unique(array_merge($filters[$key] ?? [], [$value->getValue()]));
            }
        }

        return $this->json(["filters" => $filters]);
    }
}
