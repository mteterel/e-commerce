import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductHome.module.scss";
import { FaChevronRight } from "react-icons/fa";
import {
    Container,
    Col,
    Row,
    Card,
    Nav
} from "react-bootstrap";
import PcComputer from "../assets/computer.png";
import Composant from "../assets/composant.png";
import Peripherique from "../assets/peripherique.png";
import ImageSound from "../assets/image-sound.png";

const ProductHome = props => {
    return (
        
        
            <Row className={styles.CenterBlock}>
                
                <Col xs lg="3" className={styles.productItem}>
                    <img src={PcComputer} className={styles.sizeItem}/>
                    <Link to={"/"} className={styles.productLinkItem}> 
                    <strong>PC & Ordinateur</strong> 
                    <FaChevronRight className={styles.FaChevronRight}/>
                    </Link>
                </Col>
                
                <Col xs lg="3" className={styles.productItem}>
                    <img src={Composant} className={styles.sizeItem}/>
                    <Link to={"/"} className={styles.productLinkItem}> 
                    <strong>Composant</strong> 
                    <FaChevronRight className={styles.FaChevronRight}/>
                    </Link>
                </Col>

                <Col xs lg="3" className={styles.productItem}>
                    <img src={Peripherique} className={styles.sizeItem}/>
                    <Link to={"/"} className={styles.productLinkItem}> 
                    <strong>Peripherique</strong> 
                    <FaChevronRight className={styles.FaChevronRight}/>
                    </Link>
                </Col>

                <Col xs lg="3" className={styles.productItem_last}>
                    <img src={ImageSound} className={styles.sizeItem}/>
                    <Link to={"/"} className={styles.productLinkItem}> 
                    <strong>Image & Son</strong> 
                    <FaChevronRight className={styles.FaChevronRight}/>
                    </Link>
                </Col>
            </Row>
         
    )
}

export default ProductHome;