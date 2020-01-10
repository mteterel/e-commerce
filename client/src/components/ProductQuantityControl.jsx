import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const ProductQuantityControl = props => {
  return (
    <div>
      <Button>Qty+</Button>
      <span><strong>[QTY]</strong></span>
      <Button>Qty-</Button>
    </div>
  );
};

ProductQuantityControl.propTypes = {

};

export default ProductQuantityControl;