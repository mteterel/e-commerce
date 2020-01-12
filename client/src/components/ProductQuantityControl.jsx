import React from "react";
import PropTypes from "prop-types";
import { removeItem, updateQuantity } from "../store/cart";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const ProductQuantityControl = props => {
  const increaseQuantity = () => {
    props.updateQuantity({
      productId: props.productId,
      quantity: props.quantity + 1
    });
  };

  const decreaseQuantity = () => {
    props.updateQuantity({
      productId: props.productId,
      quantity: props.quantity - 1
    });
  };

  const removeFromCart = () => {
    props.removeItem({
      productId: props.productId
    });
  };

  return (
    <div>
      <div className={"d-flex justify-content-center align-items-center"}>
        <Button
          className={"flex-fill"}
          variant={"secondary"}
          size={"sm"}
          onClick={increaseQuantity}
        >
          +
        </Button>
        <span className={"flex-grow-1 text-center mx-2"}>
          &times; {props.quantity}
        </span>
        <Button
          className={"flex-fill"}
          variant={"secondary"}
          size={"sm"}
          onClick={decreaseQuantity}
        >
          -
        </Button>
      </div>
      <div>
        <Button variant={"danger"} size={"sm"} onClick={removeFromCart} block>
          Remove
        </Button>
      </div>
    </div>
  );
};

ProductQuantityControl.propTypes = {
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

const mapDispatchToProps = {
  removeItem,
  updateQuantity
};

export default connect(null, mapDispatchToProps)(ProductQuantityControl);
