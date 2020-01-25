import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { MdDeleteForever, MdEuroSymbol } from "react-icons/md";

const CategorieList = props => {
  return (
    <div>
      <p className="configPrice">
        Total : {props.price.toFixed(2)} <MdEuroSymbol />
      </p>
      {!props.categoriesList ? (
        <p>Loading...</p>
      ) : (
        <div>
          {props.categoriesList.map((category, i) => {
            return (
              <div key={i}>
                <Row className="categorie">
                  <Col md={2} className="logoContainer">
                    <Image
                      className="categoriesLogo"
                      src={`/logo/${category.slug}.png`}
                    />
                  </Col>
                  <Col>
                    <h5>{category.name.toUpperCase()}</h5>
                    {props.mySelectedProducts.filter(
                      v => v.cat === category.name
                    ).length === 0 ? (
                      <span
                        onClick={() => props.fetchProduct(category.slug)}
                        className="empty_product text-primary"
                      >
                        <em>Select your {category.name}</em>
                      </span>
                    ) : (
                      <div>
                        <Row>
                          <Col md={11}>
                            <span
                              onClick={() => props.fetchProduct(category.slug)}
                              className="selected_product"
                            >
                              {
                                props.mySelectedProducts.filter(
                                  v => v.cat === category.name
                                )[0].name
                              }
                            </span>
                            <span className={"text-primary productPrice"}>
                              {props.mySelectedProducts
                                .filter(v => v.cat === category.name)[0]
                                .price.toFixed(2)}
                              <MdEuroSymbol />
                            </span>
                          </Col>
                          <Col md={1}>
                            <MdDeleteForever
                              onClick={() =>
                                props.deleteFromMyList(category.name)
                              }
                              size={25}
                              className="add_product"
                            />
                          </Col>
                        </Row>
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategorieList;
