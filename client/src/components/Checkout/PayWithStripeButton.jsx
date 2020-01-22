import React from "react";
import PropTypes from "prop-types";
import styles from "./PayWithStripe.module.scss";
import apiService from "../../api";
import { FaStripe } from "react-icons/all";

const PayWithStripeButton = props => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.text}>Pay with</span>
      <FaStripe className={styles.logo} size={48} color={"white"} />
    </button>
  );
};

PayWithStripeButton.propTypes = {
  orderUuid: PropTypes.string.isRequired
};

export default PayWithStripeButton;
