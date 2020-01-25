import React, { useState } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import ProductDetail from "./ProductDetail";
import {
  MdPlaylistAdd,
  MdPlaylistAddCheck,
  MdEuroSymbol
} from "react-icons/md";

const ProductList = props => {
  const [productDetail, setProductDetail] = useState("");

  const showDetail = name => {
    if (productDetail === "" && productDetail !== name) {
      setProductDetail(name);
    } else {
      setProductDetail("");
    }
  };

  const setMySelectedProduct = product => {
    props.setMyProductsList(product);
  };

  return (
    <div key={props.mySelectedProducts}>
      {/* <h4>{props.currentCategory}</h4> */}
      {props.productList ? (
        <div>
          {props.productList.map((product, i) => {
            return (
              <div key={i} className="product">
                {productDetail !== product.name && (
                  <Row>
                    <Col md={10}>
                      <h5>
                        <b>{product.name}</b>
                      </h5>
                      <p>{product.shortDescription}</p>
                      <p className={"text-primary"}>
                        {product.price.toFixed(2)} <MdEuroSymbol />
                      </p>
                      <p
                        onClick={() => showDetail(product.name)}
                        className="productDetail"
                      >
                        Show detail
                      </p>
                    </Col>
                    <Col md={2}>
                      {props.mySelectedProducts.filter(
                        v => v.name === product.name
                      ).length === 0 ? (
                        <div>
                          <br />
                          <br />
                          <Button
                            onClick={() => props.setMyProductsList(product)}
                            size={32}
                            className="add_product"
                          >
                            add to config
                          </Button>
                        </div>
                      ) : (
                        <div style={{ color: "rgb(106, 202, 10)" }}>
                          <br />
                          <br />
                          <MdPlaylistAddCheck size={32} />
                        </div>
                      )}
                    </Col>
                  </Row>
                )}
                {productDetail === product.name && (
                  <Row>
                    <Col md={12}>
                      <p
                        onClick={() => showDetail(product.name)}
                        className="productDetail"
                      >
                        Close detail
                      </p>
                      <ProductDetail
                        product={product}
                        setMySelectedProduct={setMySelectedProduct}
                        mySelectedProducts={props.mySelectedProducts}
                      />
                    </Col>
                  </Row>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      <div className="buttonContainer">
        <Button className="resetConfig" onClick={() => props.clearCategory()}>
          close
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
