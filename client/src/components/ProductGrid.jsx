import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Container fluid>
      <Row>
        {products &&
          products.map((v, i) => (
            <Col key={i} md={3} style={{ padding: 0, margin: 0 }}>
              <ProductCard product={v} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductGrid;
