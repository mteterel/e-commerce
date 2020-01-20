import React from "react";
import {
    Carousel,
    Container,
  } from "react-bootstrap";
import styles from "./CarousselPromo.module.scss";
import Ban_1 from "../assets/header-op-mobile.jpg";
import Ban_2 from "../assets/header-ba-mobile.jpg";

const CarrouselPromo = () => {
    return (
        <Container className={styles.ContainerPromo}>
    <Carousel className={styles.Carousel}>
        <Carousel.Item>
            <img
            className={styles.Ban_1}
            src={Ban_1}
            alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className={styles.Ban_2}
            src={Ban_2}
            alt="First slide"
            />
        </Carousel.Item>
    </Carousel>
    </Container>
    );
};

export default CarrouselPromo;