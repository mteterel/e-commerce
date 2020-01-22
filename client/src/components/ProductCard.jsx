import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductQuantityControl from "./ProductQuantityControl";
import AddToCartButton from "./AddToCartButton";

const ProductCard = props => {
  const [displayAdd, setDisplayAdd] = useState(false);

  const numberOfThisItemInCart = useMemo(() => {
    const item = props.cartProducts.find(
      v => v.productInfo.id === props.product.id
    );
    return item ? item.quantity : 0;
  }, [props.cartProducts, props.product.id]);

  const handleMouseEnter = () => {
    setDisplayAdd(true);
  };

  const handleMouseLeave = () => {
    setDisplayAdd(false);
  };

  return (
    <div
      className={styles.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className={"mb-2 mx-2 h-100 w-100"} style={{ border: "none" }}>
        <Link to={"/product/" + props.product.id}>
          <Card.Img
            variant={"top"}
            src={props.product.images[0]}
            className={styles.image}
          />
        </Link>
        <Card.Body className={styles.body}>
          <Card.Title className={styles.productName}>
            <Link to={"/product/" + props.product.id}>
              {props.product.name}
            </Link>
          </Card.Title>
          <div className={styles.price}>
            <strong>{props.product.price.toFixed(2)} €</strong>
          </div>
          <div>
            {numberOfThisItemInCart > 0 ? (
              <ProductQuantityControl
                productId={props.product.id}
                quantity={numberOfThisItemInCart}
              />
            ) : (
              <AddToCartButton
                product={props.product}
                buttonProps={{ size: "sm", block: true }}
                style={{ visibility: displayAdd ? "visible" : "hidden" }}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cartProducts: state.cart
});

export default connect(mapStateToProps)(ProductCard);
