<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Product;
use App\Entity\Category;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $category = new Category();
        $category->setName('CPU');
        $category->setSpecList([
            'socket', 'RAMType'
        ]);

        $manager->persist($category);


        $product = new Product();
        $product->setName('Ultra super CPU');
        $product->setDescription('Is ultra good pls buy');
        $product->setPrice(0.99);
        $product->setWeight(20.99);
        $product->setStock(666);
        $product->setCategory($category);
        $product->setSpecs([
            'socket' => 1151,
            'RAMType' => 'DDR4'
        ]);

        $manager->persist($product);
        $manager->flush();
    }
}
