import React from "react";
import styles from "./AppNavBar_2.module.scss";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const AppNavBar2 = () => {
  return (
    <Navbar
      id={"appNavRoot"}
      bg="primary"
      variant={"dark"}
      className={styles.navBarRoot}
    >
      <Container>
        <Nav className="mr-auto">
          <Nav.Item className={styles.navLinkBase}>
            <NavLink
              exact
              to={"/"}
              className={styles.navLinkSub}
              activeClassName={"active"}
            >
              Home
            </NavLink>
          </Nav.Item>
          <NavDropdown
            title="Browse"
            id="collapsible-nav-dropdown"
            className={styles.navLinkDropdown}
          >
            <NavDropdown.Item as={Link} to={"/browse/cpu"}>
              CPU
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/browse/motherboard"}>
              Motherboard
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/browse/graphics-card"}>
              Graphics Card
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/browse/memory"}>
              Memory
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavBar2;
