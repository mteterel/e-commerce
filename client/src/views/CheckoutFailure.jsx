import React from "react";
import PropTypes from "prop-types";
import { MdRemoveCircleOutline } from "react-icons/all";
import { Button } from "react-bootstrap";

const CheckoutFailure = props => {
  return (
    <div className={"text-center"}>
      <h2>Checkout Failure</h2>
      <div style={{ margin: "1em" }}>
        <MdRemoveCircleOutline size={64} />
      </div>
    </div>
  );
};

CheckoutFailure.propTypes = {
  orderId: PropTypes.string.isRequired
};

export default CheckoutFailure;
