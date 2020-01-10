import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ProductForm = () => {
    const categorie = false;
    return (
        <div>
            <Container>
                <Row>
                    {
                        !categorie ?
                        <Form>categorie input</Form>
                        :
                        <Form>form product</Form>
                    }

                </Row>
            </Container>
        </div>
    );
};

export default ProductForm;