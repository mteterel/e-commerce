import React from "react";
import { Table } from "react-bootstrap";
import { getCartItems, getTotalPrice } from "../store/cart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiniCartItem from "./MiniCartItem";

const MiniCart = props => {
  return (
    <>
      {props.cartProducts.length <= 0 && <span>Your Cart is empty :(</span>}
      {props.cartProducts.length > 0 && (
        <>
          <Table size={"sm"}>
            {props.cartProducts.map((v, i) => (
              <MiniCartItem product={v} index={i} key={i} />
            ))}
          </Table>
          <div>
            <strong>
              Total:{" "}
              <span className={"text-primary"}>{props.totalCartPrice} €</span>
            </strong>
          </div>
          <Link to={"/cart"} className={"btn btn-primary btn-block"}>
            Show Cart
          </Link>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  cartProducts: getCartItems(state),
  totalCartPrice: getTotalPrice(state)
});
export default connect(mapStateToProps)(MiniCart);
