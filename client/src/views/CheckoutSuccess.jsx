import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/all";
import { Link } from "react-router-dom";

const CheckoutSuccess = props => {
  return (
    <div className={"text-center"}>
      <h2>Checkout Success</h2>
      <div style={{ margin: "1em" }}>
        <FaCheckCircle size={64} />
      </div>
      <Button as={Link} to={"/"} variant={"primary"}>
        Continue Shopping
      </Button>
    </div>
  );
};

CheckoutSuccess.propTypes = {
  orderId: PropTypes.string.isRequired
};

export default CheckoutSuccess;
