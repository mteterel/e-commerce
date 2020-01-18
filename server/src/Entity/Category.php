<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Product", mappedBy="category", orphanRemoval=true)
     */
    private $products;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $slug;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\SpecDefinition")
     */
    private $assignableSpecs;

    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->assignableSpecs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setCategory($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            // set the owning side to null (unless already changed)
            if ($product->getCategory() === $this) {
                $product->setCategory(null);
            }
        }

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function __toString() {
        return $this->getName();
    }

    /**
     * @return Collection|SpecDefinition[]
     */
    public function getAssignableSpecs(): Collection
    {
        return $this->assignableSpecs;
    }

    public function addAssignableSpec(SpecDefinition $assignableSpec): self
    {
        if (!$this->assignableSpecs->contains($assignableSpec)) {
            $this->assignableSpecs[] = $assignableSpec;
        }

        return $this;
    }

    public function removeAssignableSpec(SpecDefinition $assignableSpec): self
    {
        if ($this->assignableSpecs->contains($assignableSpec)) {
            $this->assignableSpecs->removeElement($assignableSpec);
        }

        return $this;
    }
}
