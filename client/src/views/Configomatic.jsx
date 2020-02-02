import React, { useEffect, useMemo, useState } from "react";
import CategorieList from "../components/Configomatic/CategorieList";
import ProductList from "../components/Configomatic/ProductList";
import { Col, Row, Button } from "react-bootstrap";
import apiService from "../api";
import AddConfigToCartButton from "../components/Configomatic/AddConfigToCartButton";
import { connect } from "react-redux";

const Configomatic = props => {
  const [categoriesList, setCategoriesList] = useState("");
  const [storage, setStorage] = useState(false);
  const [productList, setProductList] = useState("");
  const [currentCategory, setCurrentcategory] = useState("");
  const [mySelectedProducts, setMySelectedProducts] = useState([]);
  const [compList, setCompList] = useState({
    RamType: {
      ref: null,
      nb_component: 0
    },
    Socket: {
      ref: null,
      nb_component: 0
    },
    FormFactor: {
      ref: null,
      nb_component: 0
    }
  });

  const priceMemo = useMemo(() => {
    let newPrice = 0;
    mySelectedProducts.map((product, i) => {
      newPrice += product.price;
    });

    return newPrice;
  }, [mySelectedProducts]);

  useEffect(() => {
    if (storage === true) {
      localStorage.setItem("myconfig", JSON.stringify(mySelectedProducts));
      localStorage.setItem("mycompat", JSON.stringify(compList));
    } else {
      setStorage(true);
    }
  }, [compList, mySelectedProducts, storage]);

  useEffect(() => {
    apiService.fetchCategoryList().then(res => {
      setCategoriesList(res.data.categories);
    });
    let config = localStorage.getItem("myconfig");
    let compat = localStorage.getItem("mycompat");
    config = JSON.parse(config);
    compat = JSON.parse(compat);
    if (config !== null && compat !== null) {
      setMySelectedProducts(config);
      setCompList(compat);
    }
  }, []);

  const fetchCategory = () => {
    apiService.fetchCategoryList().then(res => {
      setCategoriesList(res.data.categories);
    });
  };

  const fetchProduct = async id => {
    await apiService.fetchProductsFromCategory(id).then(res => {
      setCurrentcategory(res.data.categoryName);
      let filtered_prod = res.data.products;
      switch (res.data.categoryName) {
        case "CPU":
          if (
            compList.RamType.ref != null &&
            compList.RamType.nb_component > 0
          ) {
            filtered_prod = filtered_prod.filter(
              v => v.specs.RamType === compList.RamType.ref
            );
          }
          if (compList.Socket.ref != null && compList.Socket.nb_component > 0) {
            filtered_prod = filtered_prod.filter(
              v => v.specs.Socket === compList.Socket.ref
            );
          }
          setProductList(filtered_prod);
          break;

        case "RAM":
          if (
            compList.RamType.ref != null &&
            compList.RamType.nb_component > 0
          ) {
            filtered_prod = filtered_prod.filter(
              v => v.specs.RamType === compList.RamType.ref
            );
          }
          setProductList(filtered_prod);
          break;

        case "Motherboard":
          if (
            compList.RamType.ref != null &&
            compList.RamType.nb_component > 0
          ) {
            filtered_prod = filtered_prod.filter(
              v => v.specs.RamType === compList.RamType.ref
            );
          }
          if (compList.Socket.ref != null && compList.Socket.nb_component > 0) {
            filtered_prod = filtered_prod.filter(
              v => v.specs.Socket === compList.Socket.ref
            );
          }
          setProductList(filtered_prod);
          break;

        default:
          setProductList(filtered_prod);
          break;
      }
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
      await setMySelectedProducts(newList);
    }

    await setMySelectedProducts(actualProducts => [
      ...actualProducts,
      {
        cat: currentCategory,
        id: product.id,
        name: product.name,
        shortDescription: product.shortDescription,
        specs: product.specs,
        images: product.images,
        price: product.price
      }
    ]);
    updateCompList(product);
    setCurrentcategory("");
    setProductList("");
  };

  const updateCompList = product => {
    let compat = compList;
    switch (currentCategory) {
      case "CPU":
        compat.Socket.ref = product.specs.Socket;
        compat.Socket.nb_component = compat.Socket.nb_component + 1;
        compat.RamType.ref = product.specs.RamType;
        compat.RamType.nb_component = compat.RamType.nb_component + 1;
        setCompList(compat);
        break;

      case "Motherboard":
        compat.Socket.ref = product.specs.Socket;
        compat.Socket.nb_component = compat.Socket.nb_component + 1;
        compat.RamType.ref = product.specs.RamType;
        compat.RamType.nb_component = compat.RamType.nb_component + 1;
        compat.FormFactor = product.specs.FormFactor;
        setCompList(compat);
        break;

      case "RAM":
        compat.RamType.ref = product.specs.RamType;
        compat.RamType.nb_component = compat.RamType.nb_component + 1;
        setCompList(compat);
        break;

      default:
        break;
    }
  };

  const deleteFromMyList = categoryName => {
    let compat = compList;
    switch (categoryName) {
      case "CPU":
        if (compat.Socket.nb_component > 0) {
          compat.Socket.nb_component = compat.Socket.nb_component - 1;
        }
        if (compat.RamType.nb_component > 0) {
          compat.RamType.nb_component = compat.RamType.nb_component - 1;
        }
        setCompList(compat);
        break;

      case "Motherboard":
        if (compat.Socket.nb_component > 0) {
          compat.Socket.nb_component = compat.Socket.nb_component - 1;
        }
        if (compat.RamType.nb_component > 0) {
          compat.RamType.nb_component = compat.RamType.nb_component - 1;
        }
        setCompList(compat);
        break;

      case "RAM":
        if (compat.RamType.nb_component > 0) {
          compat.RamType.nb_component = compat.RamType.nb_component - 1;
        }
        setCompList(compat);
        break;

      default:
        break;
    }
    setMySelectedProducts(products => {
      return products.filter(v => v.cat !== categoryName);
    });
  };

  const clearMyProductList = () => {
    setMySelectedProducts([]);
    setCompList({
      RamType: {
        ref: null,
        nb_component: 0
      },
      Socket: {
        ref: null,
        nb_component: 0
      },
      FormFactor: {
        ref: null,
        nb_component: 0
      }
    });
  };

  return (
    <div>
      <h2 className={"og-page-title"}>PC BUILDER</h2>

      {!categoriesList ? (
        <p>Loading ...</p>
      ) : (
        <Row className="configomatic">
          {!productList ? (
            <Col md={12} className="configomatic_category">
              <CategorieList
                mySelectedProducts={mySelectedProducts}
                categoriesList={categoriesList}
                fetchProduct={fetchProduct}
                deleteFromMyList={deleteFromMyList}
                price={priceMemo}
              />
              <div className="buttonContainer">
                <AddConfigToCartButton
                  product={mySelectedProducts}
                  buttonProps={{ size: "sm", block: true }}
                />
                <Button className="resetConfig" onClick={clearMyProductList}>
                  Reset
                </Button>
              </div>
            </Col>
          ) : (
            <Col md={12} className="configomatic_product">
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

const mapStateToProps = state => ({
  cartProducts: state.cart
});

export default connect(mapStateToProps)(Configomatic);
