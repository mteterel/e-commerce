import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import api from "../services/api";
import { CardDeck, Container } from "react-bootstrap";

const Browse = props => {
  const {
    match: { params }
  } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    // TODO: fetch category products
    try {
      setIsFetching(true);
      setProducts(await api.fetchCategoryProducts(params.id));
    } finally {
      setIsFetching(false);
    }
  }, [params.id]);

  return (
    <div>
      <h1>Product List</h1>
      {isFetching && <h2>LOADING PRODUCT LIST ...</h2>}
      <CardDeck>
        {products.map(v => (
          <ProductCard />
        ))}
      </CardDeck>
    </div>
  );
};

export default Browse;
