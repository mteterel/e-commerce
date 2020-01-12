import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
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
        <Form.Group
          controlId="formBasicFirstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        >
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="formBasicAdress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Line1"
            value={line1}
            onChange={e => setLine1(e.target.value)}
          />
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Line2"
            value={line2}
            onChange={e => setLine2(e.target.value)}
          />
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Zipcode"
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}
          />
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="City"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Country"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Submit
        </Button>
        <div className={"text-center"}>
          Have an account ? <Link to={"/"}>Log in</Link>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
