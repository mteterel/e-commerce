import React from "react";
import {
     Row,
     Col,
  } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CategoriesHome.module.scss";
import GraphiqueCard from "../assets/graphique_card.png";
import MotherBoard from "../assets/carte_mère.jpg";
import Cpu from "../assets/cpu.png";
import Ram from "../assets/ram.png";
import Ssd from "../assets/ssd.jpg";
import Ventirad from "../assets/ventirad.png";
import Alim from "../assets/alim.png";
import Boitier from "../assets/boitier.png";

const CategoriesHome = props => {
    return(
        <div className={styles.DivHome}>
            {/* <Container className={styles.ContainerHome}> */}
                <Row className={styles.RowColumn}>
                    <Col xs="12" sm="6" md="6" lg="3">
                        <Link as={Link} to={"/browse/gpu"} className={styles.LinkCategories}>
                            <div className={styles.DivName}>
                                <img src={GraphiqueCard} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>GRAPHIQUE CARD<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>

                    <Col xs="12" sm="6" md="6" lg="3">
                        <Link as={Link} to={"/browse/motherboard"}>
                            <div className={styles.DivName}>
                                <img src={MotherBoard} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>MOTHER BOARD<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>

                    <Col xs="12" sm="6" md="6" lg="3">
                        <Link as={Link} to={"/browse/cpu"}>
                            <div className={styles.DivName}>
                                <img src={Cpu} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>CPU<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>

                    <Col xs="12" sm="6" md="6" lg="3">
                        <Link as={Link} to={"/browse/memory"}>
                            <div className={styles.DivName}>
                                <img src={Ram} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>RAM<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>

                    <Col xs="12" sm="6" md="6" lg="3">
                        <Link as={Link} to={"/browse/ventirad"}>
                            <div className={styles.DivName}>
                                <img src={Ventirad} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>VENTIRAD<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>

                    <Col xs="12" sm="6" md="6"  lg="3">
                        <Link as={Link} to={"/browse/ssd"}>
                            <div className={styles.DivName}>
                                <img src={Ssd} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>SSD/HDD<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>

                    <Col xs="12" sm="6" md="6" lg="3">
                        <Link as={Link} to={"/browse/power_supply"}>
                            <div className={styles.DivName}>
                                <img src={Alim} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>ALIMENTATION<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>

                    <Col xs="12" sm="6" md="6" lg="3">
                        <Link as={Link} to={"/browse/case"}>
                            <div className={styles.DivName}>
                                <img src={Boitier} className={styles.Cpu}></img>
                                <strong><p className={styles.NameToImg}>CASE<FaAngleRight className={styles.FaAngleRight}/></p></strong>
                            </div>                       
                        </Link>
                    </Col>


                </Row>
            {/* </Container> */}
        </div>
    )
}

export default CategoriesHome;