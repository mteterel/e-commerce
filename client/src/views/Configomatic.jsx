import React from 'react';
import CategorieList from "../components/Configomatic/CategorieList";
import ProductList from "../components/Configomatic/ProductList";
import { Row, Col } from "react-bootstrap";

const Configomatic = () => {
    return (
        <div>
            <Row>
                <Col md={6}>
                    <CategorieList />
                </Col>
                <Col md={6}>
                    <ProductList />
                </Col>
            </Row>
        </div>
    );
};

export default Configomatic;