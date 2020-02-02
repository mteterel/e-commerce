import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegistrationForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(email, password, firstname, lastname);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
        <div className={"text-center"}>
          Have an account ? <Link to={"/login"}>Log in</Link>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
