import React from "react";
import { Card, Container } from "react-bootstrap";
import AppNavBar1 from "../components/AppNavBar_1";
import AppNavBar2 from "../components/AppNavBar_2";
import CarousselPromo from "../components/CarousselPromo";


const _BaseLayout = ({ children }) => {
  return (
    <div>
      <header>
        <AppNavBar1 />
        <AppNavBar2 />
      </header>
      {/* <CarousselPromo></CarousselPromo> */}
      <main style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Container>
          <body>{children}</body>
        </Container>
      </main>
    </div>
  );
};

export default _BaseLayout;
