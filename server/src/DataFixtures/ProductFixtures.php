<?php

namespace App\DataFixtures;

use App\Entity\Product;
use App\Entity\ProductImage;
use App\Entity\Review;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class ProductFixtures extends Fixture
{
    private function injectImages(array $images, Product $product, ObjectManager $manager)
    {
        foreach ($images as $url) {
            $image = new ProductImage();
            $image->setUrl($url);
            $image->setProduct($product);
            $manager->persist($image);
        }
    }

    public function loadGPU(ObjectManager $manager)
    {
        $product = new Product();
        $product->setName("Gigabyte GeForce RTX 2060 OC, 6 Go");
        $product->setShortDescription("Carte graphique PCI-Express - Refroidissement semi-passif (mode 0 dB) - Avec backplate - Compatible VR");
        $product->setPrice(328.90);
        $product->setSku("GV-N2060OC-6GD");
        $this->injectImages([
            "https://www.topachat.com/boutique/img/in/in1011/in10116736/in1011673602.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10116736/02.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10116736/03.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10116736/04.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10116736/05.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10116736/06.jpg"
        ], $product, $manager);
        $product->setSpecs([
            "Manufacturer" => "Gigabyte",
            "GPUChip" => "NVIDIA GeForce RTX 2060",
            "GPUArch" => "Turing",
            "GPUMemory" => "6 GB",
            "GPUMemoryType" => "GDDR6",
            "GPUMemoryFreq" => "14000 MHz",
            "GPUCUDACores" => "1920"
        ]);
        $product->setCategory($this->getReference("c__GPU"));

        $manager->persist($product);
    }

    public function loadCPU(ObjectManager $manager)
    {
        $product = new Product();
        $product->setName("Intel Core i5-9600K (3.7 GHz)");
        $product->setShortDescription("Processeur Socket 1151 - Hexa Core - Cache 9 Mo - Coffee Lake Refresh - Ventirad non inclus");
        $product->setPrice(244.90);
        $product->setSku("BX80684I59600K");
        $this->injectImages([
            "https://www.topachat.com/boutique/img/in/in1011/in10114553/in1011455302@2x.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10114553/02.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10114553/03.jpg"
        ], $product, $manager);
        $product->setSpecs([
            "CPUArch" => "Coffee Lake Refresh",
            "CPUSocket" => "LGA 1151",
            "CPUFrequencyBase" => "3,7 GHz",
            "CPUFrequencyBoost" => "4,6 GHz",
            "CPUNumOfCores" => "6",
            "CPUNumOfThreads" => "6",
            "CPUInstructionSet" => "x64",
        ]);
        $product->setCategory($this->getReference("c__CPU"));

        $manager->persist($product);
    }

    public function loadMB(ObjectManager $manager)
    {
        $product = new Product();
        $product->setName("Asus ROG STRIX Z390-E GAMING");
        $product->setShortDescription("Carte mère ATX - Socket 1151 - Chipset Intel Z390 - USB 3.1 - SATA 6 Gb/s - M.2 - WiFi - LED intégrées");
        $product->setPrice(239.90);
        $product->setSku("ROG STRIX Z390-E GAMING");
        $this->injectImages(["https://www.topachat.com/boutique/img/in/in1011/in10114534/in1011453402.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10114534/02.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10114534/03.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10114534/04.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10114534/05.jpg"], $product, $manager);
        $product->setSpecs([
            "MBChipset" => "Intel® Z390",
            "MBSocket" => "LGA 1151",
            "MBFormFactor" => "ATX"
        ]);
        $product->setCategory($this->getReference("c__Motherboard"));

        $manager->persist($product);
    }

    public function load(ObjectManager $manager)
    {
        $this->loadGPU($manager);
        $this->loadGPU2($manager);
        $this->loadCPU($manager);
        $this->loadMB($manager);
        $this->loadRAM($manager);

        $manager->flush();
    }

    private function loadRAM(ObjectManager $manager)
    {
        $product = new Product();
        $product->setName("DDR4 Ballistix Sport LT, Rouge, 16 Go (2 x 8 Go), 3200 MHz, CAS 16");
        $product->setShortDescription("Kit Dual Channel - Mémoire DDR4 optimisée AMD Ryzen - PC-25600 - Low-Profile");
        $product->setPrice(99.90);
        $product->setSku("BLS2K8G4D32AESEK");
        $this->injectImages([
            "https://www.topachat.com/boutique/img/in/in1011/in10116968/in1011696802.jpg",
            "https://www.topachat.com/boutique/img/in/in1011/in10116968/01.jpg"
        ], $product, $manager);
        $product->setSpecs([
            "RAMMemoryType" => "DDR4",
            "RAMCapacity" => "16 GB",
            "RAMFrequency" => "3200 MHz",
            "RAMCASLatency" => "16"
        ]);
        $product->setCategory($this->getReference("c__RAM"));

        $manager->persist($product);
    }

    private function loadGPU2(ObjectManager $manager)
    {
        $product = new Product();
        $product->setName("MSI GeForce RTX 2080 SUPER GAMING X TRIO, 8 Go");
        $product->setShortDescription("Carte graphique PCI-Express overclockée - Refroidissement semi-passif (mode 0 dB) - Avec backplate - Compatible VR");
        $product->setPrice(859.90);
        $product->setSku("GeForce-RTX-2080-SUPER-GAMING-X-TRIO");
        $this->injectImages([
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/in1101755502.jpg",
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/02.jpg",
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/03.jpg",
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/04.jpg",
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/05.jpg",
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/06.jpg",
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/07.jpg",
            "https://www.topachat.com/boutique/img/in/in1101/in11017555/08.jpg"
        ], $product, $manager);
        $product->setSpecs([
            "Manufacturer" => "MSI",
            "GPUChip" => "NVIDIA GeForce RTX 2080 SUPER",
            "GPUArch" => "Turing",
            "GPUMemory" => "8 GB",
            "GPUMemoryType" => "GDDR6",
            "GPUBaseClock" => "1650 MHz",
            "GPUBoostClock" => "1845 MHz",
            "GPUMemoryFreq" => "15500 MHz",
            "GPUCUDACores" => "3072",
            "GPUTensorCores" => "384",
            "GPURTCores" => "48"
        ]);
        $product->setCategory($this->getReference("c__GPU"));

        $review = new Review();
        $review->setUser($this->getReference("testuser"));
        $review->setComment("Je suis un Pangolin Malin !");
        $review->setRating(3.0);
        $manager->persist($review);

        $product->addReview($review);

        $manager->persist($product);
    }
}
