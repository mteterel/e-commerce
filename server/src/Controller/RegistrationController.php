<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

// use Symfony\Component\Serializer\Encoder\JsonEncoder;
// use Symfony\Component\Serializer\Encoder\XmlEncoder;
// use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
// use Symfony\Component\Serializer\Serializer;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;
use App\Entity\ShippingAddress;

class RegistrationController extends AbstractController
{
    // Decodes the Request from Json to PhP array
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
     * @Route("/register", name="register")
     */
    public function index(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $request = $this->jsonToArray($request);
        $errors = $this->errorsDetected($request);

        if (!empty($errors)) {
            return $this->render('registration/index.html.twig', [
                'controller_name' => 'RegistrationController',
                'errors' => $errors
            ]);
        } else {
            $address = new ShippingAddress();
            $address->setFirstName($request['firstname']);
            $address->setLastName($request['lastname']);
            $address->setLine1($request['line1']);
            $address->setLine2($request['line2']);
            $address->setCity($request['city']);
            $address->setZipCode($request['zipcode']);
            $address->setCountry($request['country']);

            $user = new User();
            $user->setEmail($request['email']);
            $password = $passwordEncoder->encodePassword($user, $request['password']);
            $user->setPassword($password);
            $user->addShippingAddress($address);

            $manager = $this->getDoctrine()->getManager();

            $manager->persist($user);
            $manager->persist($address);
            $manager->flush();
        }


        // Using Serializer from Symfony, the situation gets worse
        // Going back to transformAction for the moment
        //
        // $encoders = [new JsonEncoder()];
        // $normalizers = [new ObjectNormalizer()];

        // $serializer = new Serializer($normalizers, $encoders);

        // $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        // $address = $serializer->deserialize($request->getContent(), ShippingAddress::class, 'json');

        // $address->setUser($user);
        // $manager = $this->getDoctrine()->getManager();

        // $manager->persist($user);
        // $manager->persist($address);
        // $manager->flush();

        return $this->render('registration/index.html.twig', [
            'controller_name' => 'RegistrationController',
        ]);
    }
}
