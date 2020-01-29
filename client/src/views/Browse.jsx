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

  const handleChangeFilters = ((index, value, checked) => {
    setFilters(filters => {
      if (checked) {
        return [...filters, value];
      } else {
        return filters.filter(v => v !== value);
      }
    });
  });

  const filteredProducts = useMemo(() => {
    // products tableau complet -- filteredProducts tableau trié
    // Récupérer products -> chercher la spec dans la state pour trier
    // Retourner le résultat
    let filtered = products;
    console.log('Memo function');
    filters.map((vfilter, ifilter) => {
      filtered.map((vproduct, iproduct) => {
        console.log(vproduct);
      });
    });
    return filtered;
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
                {Object.keys(availableFilters).map((v, index) => (
                  <ListGroup.Item key={index} style={{ padding: "0.5em 1em" }}>
                    <strong>{SpecTranslation[v] ?? v}</strong>
                    <div style={{ marginLeft: "1em" }}>
                      {availableFilters[v].map((w, index) => (
                        <Form.Check key={index} label={w} onChange={(e) => { handleChangeFilters(v, w, e.currentTarget.checked) }}/>
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
