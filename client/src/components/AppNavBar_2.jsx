import React, { useEffect, useState } from "react";
import styles from "./AppNavBar_2.module.scss";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import apiService from "../api";
import {
  FaDesktop,
  FaQuestion,
  FaRegCommentDots,
  FaHeadset
} from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

const AppNavBar2 = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiService.fetchCategoryList().then(res => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <Navbar id={"appNavRoot"} variant={"dark"} className={styles.navBarRoot}>
      <Container>
        <Nav className={styles.mrAuto}>
          {/* <Nav.Item className={styles.navLinkBase}>
            <NavLink
              exact
              to={"/"}
              className={styles.navLinkSub}
              activeClassName={"active"}
            >
              Home
            </NavLink>
          </Nav.Item> */}

          {["down"].map(direction => (
            <NavDropdown
              title={` Browse  `}
              id="collapsible-nav-dropdown"
              className={styles.navLinkDropdown}
              key={direction}
              //  style={{border : "1px solid black"}}
            >
              {categories.map((cat, i) => {
                return (
                  <NavDropdown.Item as={Link} to={`/browse/${cat.slug}`}>
                    {cat.name}
                  </NavDropdown.Item>
                  // <NavDropdown.Item as={Link} to={"/browse/motherboard"}>
                  //   Motherboard
                  // </NavDropdown.Item>
                  // <NavDropdown.Item as={Link} to={"/browse/graphics-card"}>
                  //   Graphics Card
                  // </NavDropdown.Item>
                  // <NavDropdown.Item as={Link} to={"/browse/memory"}>
                  //   Memory
                  // </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          ))}

          <Nav.Item className={styles.navLinkRight}>
            <Nav.Link
              as={Link}
              to={"/"}
              className={styles.navLinkA}
              style={{ paddingTop: "0.3em" }}
            >
              <FaDesktop className={styles.navBarIcone} />
              Computer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navLinkCenter}>
            <Nav.Link as={Link} to={"/pc-builder"} className={styles.navLinkB}>
              <GiAutoRepair className={styles.navBarIcone} />
              PC Builder
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navLinkCenter}>
            <Nav.Link as={Link} to={"/"} className={styles.navLinkB}>
              <FaRegCommentDots className={styles.navBarIcone} />
              Question
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navLinkCenter}>
            <Nav.Link as={Link} to={"/"} className={styles.navLinkB}>
              <FaHeadset className={styles.navBarIcone} />
              Support
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavBar2;
