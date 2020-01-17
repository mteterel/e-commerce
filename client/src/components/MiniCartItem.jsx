import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import styles from "./MiniCartItem.module.scss";

const MiniCartItem = props => {
  const v = props.product;
  const [isZoomed, setIsZoomed] = useState(false);
  const applyTransition = useMemo(() => {
    return !isZoomed;
  }, [isZoomed]);

  const handleMouseEnter = () => {
    //setIsZoomed(false);
  };

  const handleMouseLeave = () => {
    //setIsZoomed(true);
  };

  return (
    <tr onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <td>
        <Image
          fluid
          width={isZoomed ? 80 : 64}
          height={"auto"}
          src={v.productInfo.images[0]}
          className={applyTransition ? styles.imageInEffect : null}
        />
      </td>
      <td style={{ verticalAlign: "middle" }}>
        {!isZoomed && (
          <div>
            <strong>{v.productInfo.name}</strong>
          </div>
        )}
        <div>
          <span className={"text-primary"}>
            {v.productInfo.price.toFixed(2)} €
          </span>
          <span> &times; {v.quantity}</span>
        </div>
      </td>
    </tr>
  );
};

MiniCartItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default MiniCartItem;
