import React, { useEffect, useState } from "react";
import styles from "./AppNavBar_2.module.scss";
import { Container, 
  Nav, 
  Navbar, 
  NavDropdown, 
  Col, 
  Row 
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import apiService from "../api";
import {
  FaDesktop,
  FaQuestion,
  FaRegCommentDots,
  FaHeadset,
  FaRegHeart
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
    // <Navbar id={"appNavRoot"} variant={"dark"} className={styles.navBarRoot}>
    //   <Container>
    //     <Nav className={styles.mrAuto}>
    //       {/* <Nav.Item className={styles.navLinkBase}>
    //         <NavLink
    //           exact
    //           to={"/"}
    //           className={styles.navLinkSub}
    //           activeClassName={"active"}
    //         >
    //           Home
    //         </NavLink>
    //       </Nav.Item> */}

    //       {["down"].map(direction => (
    //         <NavDropdown
    //           title={` Browse  `}
    //           id="collapsible-nav-dropdown"
    //           className={styles.navLinkDropdown}
    //           key={direction}
    //           //  style={{border : "1px solid black"}}
    //         >
              // {categories.map((cat, i) => {
              //   return (
              //     <NavDropdown.Item
              //       as={Link}
              //       to={`/browse/${cat.slug}`}
              //       key={i}
              //     >
              //       {cat.name}
              //     </NavDropdown.Item>
              //     // <NavDropdown.Item as={Link} to={"/browse/motherboard"}>
              //     //   Motherboard
              //     // </NavDropdown.Item>
              //     // <NavDropdown.Item as={Link} to={"/browse/graphics-card"}>
              //     //   Graphics Card
              //     // </NavDropdown.Item>
              //     // <NavDropdown.Item as={Link} to={"/browse/memory"}>
              //     //   Memory
              //     // </NavDropdown.Item>
              //   );
              // })}
    //         </NavDropdown>
    //       ))}

    //       <Nav.Item className={styles.navLinkRight}>
    //         <Nav.Link
    //           as={Link}
    //           to={"/"}
    //           className={styles.navLinkA}
    //           style={{ paddingTop: "0.3em" }}
    //         >
    //           <FaDesktop className={styles.navBarIcone} />
    //           Computer
    //         </Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item className={styles.navLinkCenter}>
    //         <Nav.Link as={Link} to={"/pc-builder"} className={styles.navLinkB}>
    //           <GiAutoRepair className={styles.navBarIcone} />
    //           PC Builder
    //         </Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item className={styles.navLinkCenter}>
    //         <Nav.Link as={Link} to={"/"} className={styles.navLinkB}>
    //           <FaRegCommentDots className={styles.navBarIcone} />
    //           Question
    //         </Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item className={styles.navLinkCenter}>
    //         <Nav.Link as={Link} to={"/"} className={styles.navLinkB}>
    //           <FaHeadset className={styles.navBarIcone} />
    //           Support
    //         </Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <Container>
      <Row  className={styles.NavBarFull}>
        <Navbar collapseOnSelect expand="lg"  className={styles.NavBarFull}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" className={styles.NavColorText}>
              <Col md="2" className={styles.ColBrowse}>
              <NavDropdown title="BROWSE" style={{color: "white!important"}} id="collasible-nav-dropdown" className={styles.DropDown}>

                {categories.map((cat, i) => {
                return (
                  <NavDropdown.Item
                    as={Link}
                    to={`/browse/${cat.slug}`}
                    key={i}
                  >
                    {cat.name}
                  </NavDropdown.Item>

                );
              })}
                </NavDropdown>
              </Col>
              <Col md="2" className={styles.Col}>
                <Nav.Link as={Link} to={"/"}><FaDesktop/> PC GORILLAZ</Nav.Link>
              </Col>
              <Col md="2" className={styles.Col}>
                <Nav.Link as={Link} to={"/pc-builder"}><GiAutoRepair/> BUILDER</Nav.Link>
              </Col>
              <Col md="2" className={styles.Col}>
                <Nav.Link href="#pricing"><FaQuestion/> QUESTION</Nav.Link>
              </Col>
              <Col md="2" className={styles.Col}>
                <Nav.Link href="#pricing"><FaHeadset/> SUPPORT</Nav.Link>
              </Col>
              <Col md="2" className={styles.Col}>
                <Nav.Link href="#pricing"><FaRegHeart/> PROMO !</Nav.Link>
              </Col>  
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};

export default AppNavBar2;
