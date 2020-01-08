<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     */
    public function index(Request $request, ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail($request->email);
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            $request->password
        ));
        $manager->persist($user);
        $manager->flush();

        

        return $this->render('registration/index.html.twig', [
            'controller_name' => 'RegistrationController',
        ]);
    }
}
