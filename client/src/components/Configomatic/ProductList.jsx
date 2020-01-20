import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";

const ProductList = props => {
  const [productDetail, setProductDetail] = useState("");

  const showDetail = name => {
    if (productDetail === "" && productDetail !== name) {
      setProductDetail(name);
    } else {
      setProductDetail("");
    }
  };

  return (
    <div key={props.mySelectedProducts}>
      <h4>{props.currentCategory}</h4>
      {props.productList ? (
        <div>
          {props.productList.map((product, i) => {
            return (
              <div key={i} className="product">
                <Row>
                  <Col lg={10}>
                    <h5>
                      <b>{product.name}</b>
                    </h5>
                    <p>{product.shortDescription}</p>
                    <p>
                      <b>{product.price} euros</b>
                    </p>
                    <p
                      onClick={() => showDetail(product.name)}
                      className="productDetail"
                    >
                      Show detail
                    </p>
                    {Object.entries(product.specs).map(([specname, value]) => {
                      return (
                        <div key={specname}>
                          {productDetail === product.name && (
                            <aside>
                              {specname}: {value}
                            </aside>
                          )}
                        </div>
                      );
                    })}
                  </Col>
                  {props.mySelectedProducts.filter(v => v.name === product.name)
                    .length === 0 ? (
                    <Col lg={1}>
                      <br />
                      <br />
                      <MdPlaylistAdd
                        onClick={() => props.setMyProductsList(product)}
                        size={32}
                        className="add_product"
                      />
                    </Col>
                  ) : (
                    <Col lg={1} style={{ color: "rgb(106, 202, 10)" }}>
                      <br />
                      <br />
                      <MdPlaylistAddCheck size={32} />
                    </Col>
                  )}
                </Row>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <button onClick={() => props.clearCategory()}>close</button>
    </div>
  );
};

export default ProductList;
