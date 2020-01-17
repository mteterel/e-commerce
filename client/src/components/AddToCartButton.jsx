import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { addItem } from "../store/cart";
import { connect } from "react-redux";

const AddToCartButton = props => {
  const addToCart = () => {
    props.addItem(props.product);
  };

  return (
    <Button
      variant={"primary"}
      onClick={addToCart}
      style={{ ...props.style }}
      {...props.buttonProps}
    >
      Add to Cart
    </Button>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  addItem
};

export default connect(null, mapDispatchToProps)(AddToCartButton);
