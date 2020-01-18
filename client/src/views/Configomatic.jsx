import React, { useEffect, useState } from 'react';
import CategorieList from "../components/Configomatic/CategorieList";
import ProductList from "../components/Configomatic/ProductList";
import { Row, Col } from "react-bootstrap";
import apiService from "../api";

const Configomatic = () => {

    const [categoriesList, setCategoriesList] = useState('');
    const [productList, setProductList] = useState('');

    const fetchCategory = () => {
        apiService.fetchCategoryList()
        .then(res => {
            setCategoriesList(res.data.categories);
        });
    }

    const fetchProduct = (id) => {
        apiService.fetchProductsFromCategory(id)
        .then(res => {
            setProductList(res.data.products);
        })
    }

    const clearCategory = () => {
        setProductList("");
    }

    return (
        <div>
            <h2>Configomatic</h2>
            
            {            
                !categoriesList ?
                <button onClick={fetchCategory}>Start</button>
                :
                <Row className="configomatic">
                    {
                        !productList ?
                        <Col lg={12} className="configomatic_category">
                            <CategorieList categoriesList={categoriesList} fetchProduct={fetchProduct}/>
                        </Col>
                        :
                        <Col lg={12} className="configomatic_product">
                            <ProductList productList={productList} clearCategory={clearCategory} />
                        </Col>
                    }
                </Row>
            }
        </div>
    );
};

export default Configomatic;