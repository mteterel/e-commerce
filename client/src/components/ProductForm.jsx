import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ProductForm = () => {
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