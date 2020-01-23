import React, { useEffect, useMemo, useState } from "react";
import CategorieList from "../components/Configomatic/CategorieList";
import ProductList from "../components/Configomatic/ProductList";
import { Col, Row } from "react-bootstrap";
import apiService from "../api";

const Configomatic = () => {
  const [categoriesList, setCategoriesList] = useState("");
  const [productList, setProductList] = useState("");
  const [currentCategory, setCurrentcategory] = useState("");
  const [mySelectedProducts, setMySelectedProducts] = useState([]);
  const [compList, setCompList] = useState({
                                              RamType : {
                                                ref: null, 
                                                nb_component: 0},
                                              Socket : {
                                                ref: null,
                                                nb_component: 0},
                                              FormFactor : {
                                                ref: null,
                                                nb_component:0,}
                                              });

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
      setCurrentcategory(res.data.categoryName);
      let filtered_prod = res.data.products
      switch (res.data.categoryName) {
        case "CPU":
          if (compList.RamType.ref != null && compList.RamType.nb_component > 0) {
            filtered_prod = filtered_prod.filter(v => v.specs.RamType === compList.RamType.ref );
          }
          if (compList.Socket.ref != null && compList.Socket.nb_component > 0) {
            filtered_prod = filtered_prod.filter(v => v.specs.Socket === compList.Socket.ref );
          }
          setProductList(filtered_prod)
          break;

        case "RAM":
          if (compList.RamType.ref != null && compList.RamType.nb_component > 0) {
            filtered_prod = filtered_prod.filter(v => v.specs.RamType === compList.RamType.ref );
          }
          setProductList(filtered_prod)
          break;

        case "Motherboard":
          console.log(compList.Socket)
          if (compList.RamType.ref != null && compList.RamType.nb_component > 0) {
            filtered_prod = filtered_prod.filter(v => v.specs.RamType === compList.RamType.ref );
          }
          if (compList.Socket.ref != null && compList.Socket.nb_component > 0) {
            filtered_prod = filtered_prod.filter(v => v.specs.Socket === compList.Socket.ref );
          }
          setProductList(filtered_prod)
          break;
      
        default:
          setProductList(filtered_prod)
          break;
      }
    });
  };

  const clearCategory = async () => {
    await setProductList("");
    await setCurrentcategory("");
  };

  const setMyProductsList = async product => {
    if ( mySelectedProducts.filter( v => v.cat === currentCategory).length !== 0 ) {
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
    
    updateCompList(product);

    setCurrentcategory("");
    setProductList("");
  };

  const updateCompList = product => {
    let compat = compList;
    switch (currentCategory) {
      case "CPU":
        compat.Socket.ref = product.specs.Socket
        compat.Socket.nb_component = compat.Socket.nb_component + 1
        compat.RamType.ref = product.specs.RamType
        compat.RamType.nb_component = compat.RamType.nb_component + 1
        setCompList(compat);
        break;

      case "Motherboard":        
        compat.Socket.ref = product.specs.Socket
        compat.Socket.nb_component = compat.Socket.nb_component + 1
        compat.RamType.ref = product.specs.RamType
        compat.RamType.nb_component = compat.RamType.nb_component + 1
        compat.FormFactor = product.specs.FormFactor;
        setCompList(compat);
        break;

      case "RAM":        
        compat.RamType.ref = product.specs.RamType
        compat.RamType.nb_component = compat.RamType.nb_component + 1
        setCompList(compat);
        break;
    
      default:
        break;
    }
  }

  const deleteFromMyList = categoryName => {    
    let compat = compList;
    switch (categoryName) {
      case "CPU":
        if (compat.Socket.nb_component > 0) {
          compat.Socket.nb_component = compat.Socket.nb_component - 1
        }
        if (compat.RamType.nb_component > 0) {
          compat.RamType.nb_component = compat.RamType.nb_component - 1
        }   
        setCompList(compat);
        break;

      case "Motherboard":        
        if (compat.Socket.nb_component > 0) {
          compat.Socket.nb_component = compat.Socket.nb_component - 1
        }
        if (compat.RamType.nb_component > 0) {
          compat.RamType.nb_component = compat.RamType.nb_component - 1
        }
        setCompList(compat);
        break;

      case "RAM":        
        if (compat.RamType.nb_component > 0) {
          compat.RamType.nb_component = compat.RamType.nb_component - 1
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

  return (
    <div>
      <h2>Configomatic</h2>

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
              </Col>
            ) : (
                // <Row style={{ width: "100%", margin: "auto" }}>
                //   <Col md={6} className="configomatic_category">
                //     <CategorieList
                //       mySelectedProducts={mySelectedProducts}
                //       categoriesList={categoriesList}
                //       fetchProduct={fetchProduct}
                //       deleteFromMyList={deleteFromMyList}
                //       price={priceMemo}
                //     />
                  // </Col>
                  <Col md={12} className="configomatic_product">
                    <ProductList
                      currentCategory={currentCategory}
                      mySelectedProducts={mySelectedProducts}
                      setMyProductsList={setMyProductsList}
                      productList={productList}
                      clearCategory={clearCategory}
                    />
                  </Col>
                // </Row>
              )}
          </Row>
        )}
    </div>
  );
};

export default Configomatic;
