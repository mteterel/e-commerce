import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import apiService from "../api";
import { Col, Container, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import ProductGallery from "../components/ProductGallery";
import ProductQuantityControl from "../components/ProductQuantityControl";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import AddToCartButton from "../components/AddToCartButton";
import ReactMarkdown from "react-markdown";
import SpecListTable from "../components/ProductPage/SpecListTable";
import CommentTab from "../components/ProductPage/CommentTab";

const Product = props => {
  const params = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [productInfo, setProductInfo] = useState(null);

  const numberOfThisItemInCart = useMemo(() => {
    if (productInfo === null) return 0;

    const item = props.cartProducts.find(
      v => v.productInfo.id === productInfo.id
    );
    return item ? item.quantity : 0;
  }, [productInfo, props.cartProducts]);

  useEffect(() => {
    setIsFetching(true);
    apiService
      .fetchProductInfos(params.productId)
      .then(res => {
        setProductInfo(res.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [params.productId]);

  return (
    <>
      {isFetching && (
        <div className={"d-flex justify-content-center"}>
          <Spinner animation={"border"} variant={"primary"} />
        </div>
      )}
      {productInfo && (
        <Container fluid>
          <Helmet title={productInfo.name} />
          <Row>
            <Col md={4}>{<ProductGallery images={productInfo.images} />}</Col>
            <Col md={8}>
              <h2>{productInfo.name}</h2>
              {productInfo.sku && (
                <div>
                  <strong>Product SKU: </strong>
                  <span>{productInfo.sku}</span>
                </div>
              )}
              <div>
                <strong>Price: </strong>
                <span
                  className={"text-primary"}
                  style={{ fontSize: "1.2em", verticalAlign: "middle" }}
                >
                  {productInfo.price.toFixed(2)} €
                </span>
              </div>
              <div>
                <p>{productInfo.shortDescription}</p>
              </div>
              <div>
                {numberOfThisItemInCart > 0 ? (
                  <ProductQuantityControl
                    productId={productInfo.id}
                    quantity={numberOfThisItemInCart}
                  />
                ) : (
                  <AddToCartButton product={productInfo} />
                )}
              </div>
            </Col>
          </Row>
          <Row className={"mt-3"}>
            <Col md={12}>
              <div>
                <Tabs
                  defaultActiveKey="specifications"
                  id="uncontrolled-tab-example"
                  className={"nav-fill"}
                >
                  {productInfo.advancedDescription && (
                    <Tab eventKey={"advancedDesc"} title={"Description"}>
                      <ReactMarkdown source={productInfo.advancedDescription} />
                    </Tab>
                  )}
                  {productInfo.specs &&
                    Object.keys(productInfo.specs).length > 0 && (
                      <Tab eventKey={"specifications"} title={"Specifications"}>
                        <SpecListTable specs={productInfo.specs} />
                      </Tab>
                    )}
                  <Tab eventKey="reviews" title="Reviews">
                    <CommentTab
                      productId={productInfo.id}
                      reviews={productInfo.reviews}
                    />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cart
});

export default connect(mapStateToProps)(Product);
