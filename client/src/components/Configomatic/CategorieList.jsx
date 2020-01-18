import React, { useEffect, useState } from 'react';

const CategorieList = (props) => {

    const [selected, setSelected] = useState([{name: "Intelcore i7"}]);

    return (
        <div>
            <h4>Categories list :</h4>            
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
                                !selected[i] ?
                                <aside onClick={() => props.fetchProduct(category.slug)} className="empty_product"><em>Select your {category.name}</em></aside>
                                :
                                <aside onClick={() => props.fetchProduct(category.slug)} className="selected_product">{selected[i].name}</aside>
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