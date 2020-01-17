<?php
namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;

class JsonToPrettyJsonTransformer implements DataTransformerInterface
{
    public function transform($value)
    {
        if (is_array($value))
            $value = json_encode($value);
        return json_encode(json_decode($value), JSON_PRETTY_PRINT);
    }

    public function reverseTransform($value)
    {
        return json_decode($value, TRUE);
    }
}