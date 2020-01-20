import React from "react";
import styles from "./AppNavBar_2.module.scss";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaDesktop, FaQuestion, FaRegCommentDots, FaHeadset } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

const AppNavBar2 = () => {
  return (
    <Navbar
      id={"appNavRoot"}
      variant={"dark"}
      className={styles.navBarRoot}
    >
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
          
              {['down'].map(direction => (
          <NavDropdown
            title={` Browse  `}
            id="collapsible-nav-dropdown"
            className={styles.navLinkDropdown}
            key={direction}
            //  style={{border : "1px solid black"}}
          >
            <FaDesktop />
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
              ))}

          <Nav.Item className={styles.navLinkRight}>
            <NavLink as={Link} to={"/"} className={styles.navLinkA}>
            <FaDesktop className={styles.navBarIcone}/>
                Computer
            </NavLink>
          </Nav.Item>
          <Nav.Item className={styles.navLinkCenter}>
            <NavLink as={Link} to={"/pc-builder"} className={styles.navLinkB}>
            <GiAutoRepair className={styles.navBarIcone}/>
              PC Builder  
            </NavLink>
          </Nav.Item>
          <Nav.Item className={styles.navLinkCenter}>
            <NavLink as={Link} to={"/"} className={styles.navLinkB}>
            <FaRegCommentDots className={styles.navBarIcone}/>
              Question
            </NavLink>
          </Nav.Item>
          <Nav.Item className={styles.navLinkCenter}>
            <NavLink as={Link} to={"/"} className={styles.navLinkB}>
            <FaHeadset className={styles.navBarIcone}/>
              Support
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavBar2;
