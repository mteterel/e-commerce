import React from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import ProductQuantityControl from "../components/ProductQuantityControl";
import { getCartItems, getTotalPrice } from "../store/cart";
import { Helmet } from "react-helmet";

const Cart = props => {
  const proceedToCheckout = () => {
    // TODO: initiate checkout session from here
  };

  return (
    <div>
      <Helmet title={"Cart"} />
      <Container>
        <Row>
          <Col md={9}>
            <Table>
              <thead>
                <tr>
                  <th />
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {props.cartProducts.map((v, i) => (
                  <tr key={i}>
                    <td>
                      <Image
                        fluid
                        width={96}
                        height={"auto"}
                        src={v.productInfo.images[0]}
                      />
                    </td>
                    <td>{v.productInfo.name}</td>
                    <td>{v.productInfo.price} €</td>
                    <td>
                      <ProductQuantityControl
                        productId={v.productInfo.id}
                        quantity={v.quantity}
                      />
                    </td>
                    <td>{(v.quantity * v.productInfo.price).toFixed(2)} €</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={"3"} className={"bg-light"}>
            <div>
              <strong>TOTAL PRICE: </strong>
              <span>{props.totalCartPrice.toFixed(2)} €</span>
            </div>
            <Button
              variant={"primary"}
              size={"sm"}
              block
              onClick={proceedToCheckout}
            >
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  cartProducts: getCartItems(state),
  totalCartPrice: getTotalPrice(state)
});
export default connect(mapStateToProps)(Cart);
