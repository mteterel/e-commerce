import React from "react";
import { Card, Container } from "react-bootstrap";
import AppNavBar1 from "../components/AppNavBar_1";
import AppNavBar2 from "../components/AppNavBar_2";

const _BaseLayout = ({ children }) => {
  return (
    <div>
      <header>
        <AppNavBar1 />
        <AppNavBar2 />
      </header>
      <main style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Container>
          <Card body>{children}</Card>
        </Container>
      </main>
    </div>
  );
};

export default _BaseLayout;
