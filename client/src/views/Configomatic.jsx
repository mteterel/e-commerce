import React, { useEffect, useState } from "react";
import CategorieList from "../components/Configomatic/CategorieList";
import ProductList from "../components/Configomatic/ProductList";
import { Row, Col } from "react-bootstrap";
import apiService from "../api";

const Configomatic = () => {
    const [price, setPrice] = useState(0);
    const [categoriesList, setCategoriesList] = useState("");
    const [productList, setProductList] = useState("");
    const [currentCategory, setCurrentcategory] = useState("");
    const [mySelectedProducts, setMySelectedProducts] = useState([]);

    const fetchCategory = async () => {
        await apiService.fetchCategoryList().then(res => {
            setCategoriesList(res.data.categories);
        });
    };

    const fetchProduct = async (id) => {
        await apiService.fetchProductsFromCategory(id).then(res => {
            setProductList(res.data.products);
            setCurrentcategory(res.data.categoryName);
        });
    };

    const clearCategory = async () => {
        await setProductList("");
        await setCurrentcategory("");
    };

    const setMyProductsList = async (product) => {
        if (mySelectedProducts.filter(v => v.cat === currentCategory).length !== 0) {
            var targetIndex = await mySelectedProducts.findIndex((each) => each.cat === currentCategory);
            var newList = await mySelectedProducts
            await newList.splice((targetIndex ), 1);
            await setMySelectedProducts(newList)
        }
        await setMySelectedProducts([
            ...mySelectedProducts,
            {
                cat: currentCategory,
                name: product.name,
                price: product.price
            }
        ]);
        await updatePrice();
        await setCurrentcategory("");
        await setProductList("");        
    };

    const deleteFromMyList = async (category) => {
        var targetIndex = await mySelectedProducts.findIndex((each) => each.cat === category);
        var newList = mySelectedProducts
        await newList.splice((targetIndex), 1);
        await setMySelectedProducts(newList);
        await updatePrice();
    }

    const updatePrice = async () => {
        var newPrice = 0;
        await mySelectedProducts.map((product, i) => {
            newPrice += product.price;
        })
        await setPrice(newPrice);
    }

    return (
        <div key={mySelectedProducts}>
            <h2>Configomatic</h2>

            {!categoriesList ? (
                <button onClick={fetchCategory}>Start</button>
            ) : (
                    <Row className="configomatic">
                        {!productList ? (
                            <Col lg={12} className="configomatic_category">
                                <CategorieList
                                    mySelectedProducts={mySelectedProducts}
                                    categoriesList={categoriesList}
                                    fetchProduct={fetchProduct}
                                    deleteFromMyList={deleteFromMyList}
                                    price={price}
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
