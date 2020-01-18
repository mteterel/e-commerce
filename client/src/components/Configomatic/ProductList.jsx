import React, { useState } from 'react';
import Product from '../../views/Product';

const ProductList = (props) => {

    const [productDetail, setProductDetail] = useState("");

    const showDetail = (name) => {
        if( productDetail === "" && productDetail !== name) {
            setProductDetail(name);
        } else {
            setProductDetail(""); 
        }
    }

    return (
        <div>
            <h4>Liste des produits</h4>
            <button onClick={() => props.clearCategory()}>close</button>
            {
                props.productList ?
                <div>
                    {props.productList.map((product, i) => {
                        return (
                            <div key={i} className="product">
                                <h6>{product.name}</h6>
                                <p>{product.price} euros</p>
                                <p onClick={() => showDetail(product.name)} className="productDetail">Show detail</p>
                                {Object.entries(product.specs).map(([spec, j]) => {
                                    return (
                                        <div>
                                            { productDetail === product.name && (
                                                <aside key={j}>{spec}: {j}</aside>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                :
                ""
            }
        </div>
    );
};

export default ProductList;