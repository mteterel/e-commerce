import React from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row, Tab, Tabs, Button } from "react-bootstrap";
import SpecListTable from "../ProductPage/SpecListTable";
import ProductGallery from "../ProductGallery";
import { MdPlaylistAddCheck } from "react-icons/md";
import CommentTab from "../ProductPage/CommentTab";

const ProductDetail = props => {
  return (
    <div>
      {props.product && (
        <Container fluid>
          <Helmet title={props.product.name} />
          <Row>
            <Col md={4}>{<ProductGallery images={props.product.images} />}</Col>
            <Col md={8}>
              <h2>{props.product.name}</h2>
              {props.product.sku && (
                <div>
                  <strong>Product SKU: </strong>
                  <span>{props.product.sku}</span>
                </div>
              )}
              <div>
                <strong>Price: </strong>
                <span
                  className={"text-primary"}
                  style={{ fontSize: "1.2em", verticalAlign: "middle" }}
                >
                  {props.product.price.toFixed(2)} €
                </span>
              </div>
              <div>
                <p>{props.product.shortDescription}</p>
              </div>
              <div>
                {props.mySelectedProducts.filter(
                  v => v.name === props.product.name
                ).length === 0 ? (
                  <div>
                    <br />
                    <br />
                    <Button
                      onClick={() => props.setMySelectedProduct(props.product)}
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
                  {props.product.specs &&
                    Object.keys(props.product.specs).length > 0 && (
                      <Tab eventKey={"specifications"} title={"Specifications"}>
                        <SpecListTable specs={props.product.specs} />
                      </Tab>
                    )}
                  <Tab eventKey="reviews" title="Reviews">
                    <CommentTab
                      productId={props.product.id}
                      reviews={props.reviews}
                    />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductDetail;
