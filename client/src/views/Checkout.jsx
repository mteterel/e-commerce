import React from "react";
import PayWithStripeButton from "../components/Checkout/PayWithStripeButton";
import Helmet from "react-helmet";
import apiService from "../api";
import { connect } from "react-redux";
import { Col, Image, Row, Table } from "react-bootstrap";
import ShippingAddressForm from "../components/Checkout/ShippingAddressForm";
import { getTotalPrice } from "../store/cart";

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
      <h2 className={"og-page-title"}>Order Summary</h2>
      <div>
        <Table>
          <thead>
            <tr>
              <th colSpan={2}>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {props.cartProducts.map((v, index) => (
              <tr key={index}>
                <td>
                  <Image
                    thumbnail
                    width={64}
                    height={64}
                    src={v.productInfo.images[0]}
                  />
                </td>
                <td>{v.productInfo.name}</td>
                <td>x {v.quantity}</td>
                <td>{(v.productInfo.price * v.quantity).toFixed(2)} €</td>
              </tr>
            ))}
            <tr>
              <td colSpan={4}>
                Total:{" "}
                <strong className={"text-primary"}>
                  {props.totalCartPrice} €
                </strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <Row>
          <Col md={8}>
            <h3 className={"og-page-title"}>Shipping Address</h3>
            <ShippingAddressForm />
          </Col>
          <Col md={4}>
            <h3 className={"og-page-title"}>Payment Method</h3>
            <PayWithStripeButton
              orderUuid={"123"}
              onClick={handlePayButtonClick}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cart,
  totalCartPrice: getTotalPrice(state)
});

export default connect(mapStateToProps)(Checkout);
