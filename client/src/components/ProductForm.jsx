import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const ProductForm = () => {
  const list = ["format", "socket", "capacité", "dimension"];
  const [categoryList, setCategorieList] = useState([
    "Processeur",
    "Carte mere",
    "Carte graphique"
  ]);
  const [errorMessage, seterrorMessage] = useState(false);
  const [selectedCategory, setselectedCategorie] = useState("");
  const [specList, setspecList] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedCategory) {
      seterrorMessage(false);
      setspecList(list);
    } else {
      seterrorMessage(true);
    }
  };

  const handleChange = e => {
    setselectedCategorie(e.target.value);
  };

  return (
    <div>
      <Container>
        <Row>
          <h2></h2>
          {!specList ? (
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupCategory">
                  <Form.Label>Categorie</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedCategory}
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    {categoryList.map((category, i) => {
                      return (
                        <option key={i} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
                {errorMessage && (
                  <Alert variant="danger">Please select a category</Alert>
                )}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          ) : (
            <Form>
              <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group controlId="formGroupDescription">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductForm;
