<?php
namespace App\Form\Type;

use App\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use App\Form\DataTransformer\JsonToPrettyJsonTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class JsonType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {        
        parent::buildForm($builder, $options);
        $builder->addViewTransformer(new JsonToPrettyJsonTransformer());                        
    }

    public function getParent()
    {   
        return TextareaType::class;
    }
}