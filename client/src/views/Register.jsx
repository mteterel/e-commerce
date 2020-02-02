import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { useState } from "react";
import apiService from "../api";
import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (email, password, firstname, lastname) => {
    apiService
      .signUp(email, password, firstname, lastname)
      .then(res => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          history.push("/login");
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div>
      <Helmet title={"Register"} />
      <Container>
        <h2 className={"og-page-title"}>Register</h2>
        <hr />
        <ul>
          {errors.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
        <RegistrationForm onSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default Register;
