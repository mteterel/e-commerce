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
  const [filters, setFilters] = useState([]);
  const [availableFilters, setAvailableFilters] = useState([]);
  const [sortOption, setSortOption] = useState("FEATURED");

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

    filteredProducts = filteredProducts.sort((a, b) => {
      switch (sortOption) {
        case "FEATURED":
          return a.id > b.id ? -1 : 1;
        case "PRICE_ASC":
          return a.price > b.price ? 1 : -1;
        case "PRICE_DESC":
          return b.price > a.price ? 1 : -1;
        default:
          return 0;
      }
    });

    return filteredProducts;
  }, [filters, products, sortOption]);

  const productCount = useMemo(() => {
    return products.length;
  }, [products]);

  const handleSortChange = e => {
    setSortOption(e.target.value);
  };

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
            <div>
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
            <Row>
              <Col md={9}>
                <h2 className={"og-page-title"}>{categoryName}</h2>
                <small>{productCount} product(s) in this category</small>
              </Col>
              <Col md={3}>
                <span>Sort by: </span>
                <Form.Control
                  as={"select"}
                  onChange={handleSortChange}
                  value={sortOption}
                >
                  <option value={"FEATURED"}>Featured</option>
                  <option value={"PRICE_ASC"}>Price: Low to High</option>
                  <option value={"PRICE_DESC"}>Price: High to Low</option>
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <div className={"my-4"}>
                <ProductGrid products={filteredProducts} />
              </div>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Browse;
