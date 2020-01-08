import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const RegistrationForm = () => {

  const [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
  const  [firstname, setFirstname] = useState("");
  const  [lastname, setLastname] = useState("");
  const  [line1, setLine1] = useState("");
  const  [line2, setLine2] = useState("");
  const  [zipCode, setzipCode] = useState("");
  const  [city, setCity] = useState("");
  const  [country, setCountry] = useState("");

  const handleChangeEmail = (e) => {    
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  }

  const handleChangeLine1 = (e) => {
    setLine1(e.target.value);
  }

  const handleChangeLine2 = (e) => {
    setLine2(e.target.value);
  }

  const handleChangeZipCode = (e) => {
    setzipCode(e.target.value);
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  }

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>REGISTRATION :</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" value={email} onChange={handleChangeEmail}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" value={password} onChange={handleChangePassword}/>
              </Form.Group>
              <Form.Group controlId="formBasicLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="" value={lastname} onChange={handleChangeLastname}/>
              </Form.Group>
              <Form.Group controlId="formBasicFirstname" value={firstname} onChange={handleChangeFirstname}>
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group controlId="formBasicAdress">
                <Form.Label>Adress</Form.Label>
                <Form.Control className="mb-2" type="text" placeholder="Line1" value={line1} onChange={handleChangeLine1}/>
                <Form.Control className="mb-2" type="text" placeholder="Line2" value={line2} onChange={handleChangeLine2}/>
                <Form.Control className="mb-2" type="text" placeholder="Zipcode" value={zipCode} onChange={handleChangeZipCode}/>
                <Form.Control className="mb-2" type="text" placeholder="City" value={city} onChange={handleChangeCity}/>
                <Form.Control className="mb-2" type="text" placeholder="Country" value={country} onChange={handleChangeCountry} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationForm;