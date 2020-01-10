import React, { useEffect, useState } from "react";
import { Tab, TabPane, Tabs } from "react-bootstrap";

const Product = props => {
  const {
    match: { params }
  } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    // TODO: load product information from there
  }, [params.id]);

  return (
    <div>
      <h1>Product Details</h1>
      <Tabs>
        <Tab eventKey={"specifications"} title={"Specifications"}>
          Specifications here
        </Tab>
        <Tab eventKey={"reviews"} title={"Reviews"}>
          Reviews here
        </Tab>
      </Tabs>
    </div>
  );
};

export default Product;
