import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router";
import { Col, Form, ListGroup, Row, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ProductGrid from "../components/ProductGrid";
import SpecTranslation from "../translations/specs";
import apiService from "../api";

const Browse = () => {
  const params = useParams();
  const [categoryName, setCategoryName] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [filters, setFilters] = useState([]);
  const [availableFilters, setAvailableFilters] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    setAvailableFilters([]);

    apiService.fetchFiltersFromCategory(params.categoryId).then(res => {
      setAvailableFilters(res.data.filters);
    });

    apiService
      .fetchProductsFromCategory(params.categoryId)
      .then(res => {
        setProducts(res.data.products);
        setProductCount(res.data.productsCount);
        setCategoryName(res.data.categoryName);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [params.categoryId]);

  const handleChangeFilters = (specName, specValue, checked) => {
    setFilters(filters => {
      if (checked) {
        if (filters.find(filter => filter.specName === specName)) {
          let target = filters.find(filter => filter.specName === specName);
          target.specValue.push(specValue);
          return [...filters];
        } else {
          return [...filters, { specName, specValue: [specValue] }];
        }
      } else {
        let target = filters.find(filter => filter.specName === specName);
        let index = target.specValue.indexOf(specValue);
        target.specValue.splice(index, 1);
        return [...filters];
      }
    });
  };

  const filteredProducts = useMemo(() => {
    let match = null;
    let filteredProducts = [];
    products.map((product, i) => {
      match = true;
      Object.entries(product.specs).map(([specName, specValue]) => {
        filters.map((filter, i) => {
          if (
            filter.specName === specName &&
            filter.specValue.length !== 0 &&
            !filter.specValue.includes(specValue)
          ) {
            match = false;
          }
        });
      });
      if (match) {
        filteredProducts.push(product);
      }
    });
    console.log(filters);
    return filteredProducts;
  }, [filters, products]);

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
                {Object.keys(availableFilters).map((specName, index) => (
                  <ListGroup.Item key={index} style={{ padding: "0.5em 1em" }}>
                    <strong>{SpecTranslation[specName] ?? specName}</strong>
                    <div style={{ marginLeft: "1em" }}>
                      {availableFilters[specName].map((specValue, index) => (
                        <Form.Check
                          key={index}
                          label={specValue}
                          onChange={e => {
                            handleChangeFilters(
                              specName,
                              specValue,
                              e.currentTarget.checked
                            );
                          }}
                        />
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
              <ProductGrid products={filteredProducts} />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Browse;
