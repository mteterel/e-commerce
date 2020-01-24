import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { addItem } from "../../store/cart";
import { connect } from "react-redux";

const AddConfigToCartButton = props => {
  const addToCart = () => {
    {
      props.product.map((product, i) => {
        props.addItem(product);
      });
    }
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

AddConfigToCartButton.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapDispatchToProps = {
  addItem
};

export default connect(null, mapDispatchToProps)(AddConfigToCartButton);
