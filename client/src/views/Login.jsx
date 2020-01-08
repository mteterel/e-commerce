import React from "react";
import LoginForm from "../components/LoginForm";
import api from "../services/api";
import { Helmet } from "react-helmet";

const Login = () => {
  const handleSubmit = loginData => {
    api
      .login(loginData)
      .then(response => {
        alert(JSON.stringify(response.data));
        if (response.data.token !== null) {
          api.setAuthorizationToken(response.data.token);
          alert("TOKEN SUCCESS: " + response.data.token);
        }
      })
      .catch(err => {
        alert("Error : " + JSON.stringify(err));
      });
  };

  return (
    <div>
      <Helmet title={"Login"} />
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
