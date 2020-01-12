import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import RegistrationForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div>
      <Helmet title={"Register"} />
      <Container>
        <h2>REGISTER :</h2>
        <RegistrationForm />
      </Container>
    </div>
  );
};

export default Register;
