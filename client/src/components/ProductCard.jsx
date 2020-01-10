import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const ProductCard = props => {
  return (
    <Card>
      <Card.Img variant="top" src="https://placehold.it/286px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
