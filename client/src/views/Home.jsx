import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ProductHome from "../components/ProductHome";
import CarousselPromo from "../components/CarousselPromo";


const Home = () => {
  const categories = ["cpu", "memory", "graphics-card", "motherboard"];

  return (

    <div>
      <Helmet title={"Home"} />
      <div>
        <CarousselPromo></CarousselPromo>
         <ProductHome></ProductHome>
      </div>
    </div>
  );
};

export default Home;
