import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Col, Form, ListGroup, Row, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ProductGrid from "../components/ProductGrid";
import SpecTranslation from "../translations/specs";

const Browse = () => {
  const params = useParams();
  const [categoryName, setCategoryName] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [availableFilters, setAvailableFilters] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    setAvailableFilters([]);
    axios
      .get(
        "https://localhost:8000/categories/" + params.categoryId + "/filters"
      )
      .then(res => {
        setAvailableFilters(res.data.filters);
      });

    axios
      .get(
        "https://localhost:8000/categories/" + params.categoryId + "/products"
      )
      .then(res => {
        setProducts(res.data.products);
        setProductCount(res.data.productsCount);
        setCategoryName(res.data.categoryName);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [params.categoryId]);

  return (
    <div>
      {categoryName && <Helmet title={categoryName} />}
      {isFetching ? (
        <div className={"d-flex justify-content-center"}>
          <Spinner animation={"border"} variant={"primary"} />
        </div>
      ) : (
        <Row>
          <Col md={3}>
            <div className={"bg-light"}>
              <ListGroup style={{ fontSize: "12px" }}>
                {Object.keys(availableFilters).map((v, index) => (
                  <ListGroup.Item key={index} style={{ padding: "0.5em 1em" }}>
                    <strong>{SpecTranslation[v] ?? v}</strong>
                    <div style={{ marginLeft: "1em" }}>
                      {availableFilters[v].map((v, index) => (
                        <Form.Check key={index} label={v} />
                      ))}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col md={9}>
            <span>{productCount} product(s) in this category</span>
            <div className={"my-4"}>
              <ProductGrid products={products} />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Browse;
