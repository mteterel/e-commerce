import React from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import ProductQuantityControl from "../components/ProductQuantityControl";
import { getCartItems, getTotalPrice } from "../store/cart";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cart = props => {
  return (
    <div>
      <Helmet title={"Cart"} />
      <Container fluid>
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
                    <td>{v.quantity * v.productInfo.price} €</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={"3"} className={"bg-light"}>
            <div>
              <strong>TOTAL PRICE: </strong>
              <span>{props.totalCartPrice} €</span>
            </div>
            <Button
              as={Link}
              to={"/checkout"}
              variant={"primary"}
              size={"sm"}
              block
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
