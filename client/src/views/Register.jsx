import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <div>
      <Helmet title={"Register"} />
      <RegistrationForm />
    </div>
  );
};

export default Register;
