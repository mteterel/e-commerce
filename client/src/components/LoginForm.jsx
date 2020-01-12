import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit(email, password);
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Log in
        </Button>
        <div className={"text-center"}>
          <Link to={"/register"}>Create a new account</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
