import React from 'react';
import { Row, Col } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

const CategorieList = (props) => {

    return (
        <div key={props.price}>
            <h4>Categories list :</h4>
            <p>Total : {props.price}</p>          
            {
                !props.categoriesList ? 
                    <p>error</p>
                :
                <div>
                    {props.categoriesList.map((category, i) => {
                        return (
                        <div key={i}>
                            <div className="categorie">
                                <h5>{category.name}</h5>
                            { 
                                props.mySelectedProducts.filter(v => v.cat === category.name).length === 0 ?
                                <p onClick={() => props.fetchProduct(category.slug)} className="empty_product">
                                    <em>Select your {category.name}</em>
                                </p>
                                :
                                <div>
                                    <Row>
                                        <Col lg={11}>
                                            <p onClick={() => props.fetchProduct(category.slug)} className="selected_product">
                                                {props.mySelectedProducts.filter(v => v.cat === category.name)[0].name}
                                            </p>
                                        </Col>
                                        <Col lg={1}>
                                            <MdDeleteForever onClick={() => props.deleteFromMyList(category.name)} size={32} className="add_product"/>
                                        </Col>
                                    </Row>
                                    <p>
                                        {props.mySelectedProducts.filter(v => v.cat === category.name)[0].price} euros
                                    </p>
                                </div>
                            }
                            </div>
                        </div>
                        );
                    })}
                </div>
            }
        </div>
    );
};

export default CategorieList;