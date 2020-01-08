<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;
use App\Entity\ShippingAddress;

class RegistrationController extends AbstractController
{
    public function transformAction(Request $request)
    {
        $parametersAsArray = [];
        if ($content = $request->getContent()) {
            $parametersAsArray = json_decode($content, true);
        }
        return $parametersAsArray;
    }

    /**
     * @Route("/register", name="register")
     */
    public function index(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $request = $this->transformAction($request);

        $address = new ShippingAddress();
        $address->setFirstname($request['firstname']);
        $address->setLastname($request['lastname']);
        $address->setLine1($request['line1']);
        $address->setLine2($request['line2']);
        $address->setCity($request['city']);
        $address->setZipcode($request['zipcode']);
        $address->setCountry($request['country']);

        $user = new User();
        $user->setEmail($request['email']);
        $password = $passwordEncoder->encodePassword($user, $request['password']);
            $user->setPassword($password);
        $user->addShippingAddress($address);

        $manager = $this->getDoctrine()->getManager();

        // Using Serializer from Symfony, the situation gets worse
        // Going back to transformAction for the moment
        //
        // $encoders = [new JsonEncoder()];
        // $normalizers = [new ObjectNormalizer()];

        // $serializer = new Serializer($normalizers, $encoders);
        
        // $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        // $address = $serializer->deserialize($request->getContent(), ShippingAddress::class, 'json');

        // $address->setUser($user);

        $manager->persist($user);
        $manager->persist($address);
        $manager->flush();
        
        return $this->render('registration/index.html.twig', [
            'controller_name' => 'RegistrationController',
        ]);
    }
}
