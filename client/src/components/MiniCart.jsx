import React from "react";
import { connect } from "react-redux";

const MiniCart = ({ cartItems }) => {
  return (
    <div>
      {mapStateToProps.map(v => (
        <p>[[ MiniCartItem ]]</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart
});

return connect(mapStateToProps)(MiniCart);
