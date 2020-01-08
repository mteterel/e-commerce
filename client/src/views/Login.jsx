import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const handleSubmit = () => {
    alert("TODO: send form to server");
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
