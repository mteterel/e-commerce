import React, { useEffect, useMemo, useState } from "react";
import CategorieList from "../components/Configomatic/CategorieList";
import ProductList from "../components/Configomatic/ProductList";
import { Col, Row } from "react-bootstrap";
import apiService from "../api";

const Configomatic = () => {
  const [price, setPrice] = useState(0);
  const [categoriesList, setCategoriesList] = useState("");
  const [productList, setProductList] = useState("");
  const [currentCategory, setCurrentcategory] = useState("");
  const [mySelectedProducts, setMySelectedProducts] = useState([]);

  const priceMemo = useMemo(() => {
    let newPrice = 0;
    mySelectedProducts.map((product, i) => {
      newPrice += product.price;
    });

    return newPrice;
  }, [mySelectedProducts]);

  useEffect(() => {
    apiService.fetchCategoryList().then(res => {
      setCategoriesList(res.data.categories);
    });
  }, []);

  const fetchCategory = () => {
    apiService.fetchCategoryList().then(res => {
      setCategoriesList(res.data.categories);
    });
  };

  const fetchProduct = async id => {
    await apiService.fetchProductsFromCategory(id).then(res => {
      setProductList(res.data.products);
      setCurrentcategory(res.data.categoryName);
    });
  };

  const clearCategory = async () => {
    await setProductList("");
    await setCurrentcategory("");
  };

  const setMyProductsList = async product => {
    if (
      mySelectedProducts.filter(v => v.cat === currentCategory).length !== 0
    ) {
      var targetIndex = mySelectedProducts.findIndex(
        each => each.cat === currentCategory
      );
      var newList = mySelectedProducts;
      newList.splice(targetIndex, 1);
      setMySelectedProducts(newList);
    }

    setMySelectedProducts(actualProducts => [
      ...actualProducts,
      {
        cat: currentCategory,
        name: product.name,
        price: product.price
      }
    ]);

    setCurrentcategory("");
    setProductList("");
  };

  const deleteFromMyList = category => {
    setMySelectedProducts(products => {
      return products.filter(v => v.cat !== category);
    });
  };

  return (
    <div>
      <h2>Configomatic</h2>

      {!categoriesList ? (
        <p>Loading ...</p>
      ) : (
        <Row className="configomatic">
          {!productList ? (
            <Col lg={12} className="configomatic_category">
              <CategorieList
                mySelectedProducts={mySelectedProducts}
                categoriesList={categoriesList}
                fetchProduct={fetchProduct}
                deleteFromMyList={deleteFromMyList}
                price={priceMemo}
              />
            </Col>
          ) : (
            <Col lg={12} className="configomatic_product">
              <ProductList
                currentCategory={currentCategory}
                mySelectedProducts={mySelectedProducts}
                setMyProductsList={setMyProductsList}
                productList={productList}
                clearCategory={clearCategory}
              />
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

export default Configomatic;
