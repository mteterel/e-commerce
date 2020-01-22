import React from "react";
import PayWithStripeButton from "../components/Checkout/PayWithStripeButton";
import Helmet from "react-helmet";
import apiService from "../api";
import { connect } from "react-redux";

const Checkout = props => {
  const handlePayButtonClick = () => {
    const packed = props.cartProducts.map(v => {
      return { productId: v.productInfo.id, quantity: v.quantity };
    });

    apiService.initiateTransaction(packed, "stripe").then(res => {
      const stripe = window.Stripe(
        "pk_test_lzxpbL4iv7xlZw1LntiVjw1b00Q7XK61fY"
      );
      stripe.redirectToCheckout({
        sessionId: res.data.stripe_session_id
      });
    });
  };

  return (
    <div>
      <Helmet title={"Checkout"}>
        <script src="https://js.stripe.com/v3/" />
      </Helmet>
      <div>
        <h2>Ordered Items</h2>
        {props.cartProducts.map((v, index) => (
          <div key={index}>
            <strong>{v.productInfo.name}</strong>
            <span>x {v.quantity} for PRICE €</span>
          </div>
        ))}
      </div>
      <h2>Shipping Address</h2>
      <PayWithStripeButton orderUuid={"123"} onClick={handlePayButtonClick} />
    </div>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cart
});

export default connect(mapStateToProps)(Checkout);
