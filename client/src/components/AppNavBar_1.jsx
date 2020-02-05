import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  PopoverContent,
  Row
} from "react-bootstrap";
import MiniCart from "./MiniCart";
import { connect } from "react-redux";
import Logo from "../assets/gorillaz.png";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import styles from "./AppNavBar_1.module.scss";
import { Link } from "react-router-dom";

const AppNavBar1 = props => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={styles.navbar_top}
      // style={{ padding: "1em" }}
    >
      <Container className={styles.container_nav1}>
        <Row className={styles.container_nav1}>
          <Col
            md={{ span: 9, order: 1 }}
            lg={{ span: 3, order: 1 }}
            xs={{ span: 12, order: 1 }}
            className={styles.col}
          >
            <Navbar.Brand href="/">
              <img src={Logo} className={styles.BaseLogo} />
            </Navbar.Brand>
          </Col>
          <Col
            lg={{ span: 7, order: 2 }}
            md={{ span: 10, order: 12 }}
            xs={{ span: 12, order: 4 }}
            className={styles.col}
            className={styles.coltest}
          >
            <InputGroup className={styles.search_bar}>
              <FormControl
                className={styles.search}
                type="search"
                placeholder="Search for products"
              />
              <InputGroup.Append>
                <Button className={styles.SearchButton}>
                  <FaSearch className={styles.FaSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col
            md={{ span: 1, order: 10 }}
            lg={{ span: 1, order: 11 }}
            xs={{ span: 6, order: 2 }}
            className={styles.col}
          >
            {/* <Nav> */}
            <div className={styles.test}>
              <OverlayTrigger
                trigger={"click"}
                placement="bottom"
                overlay={
                  <Popover id={"popover-mini-cart"} className={styles.popover}>
                    <PopoverContent className={styles.popoverContent}>
                      <MiniCart />
                    </PopoverContent>
                  </Popover>
                }
              >
                <Nav.Link className={styles.navlink}>
                  <div className={styles.testdiv}>
                    <FiShoppingCart
                      className={styles.FaShoppingCart}
                      color="white"
                    />
                    <Badge
                      pill
                      variant={"primary"}
                      className={styles.BadgeCart}
                    >
                      {props.cartProducts.length}
                    </Badge>
                  </div>
                  <span className={styles.cart}>Cart&nbsp;</span>
                </Nav.Link>
              </OverlayTrigger>
            </div>
          </Col>
          <Col
            md={{ span: 1, order: 11 }}
            lg={{ span: 1, order: 12 }}
            xs={{ span: 6, order: 3 }}
            className={styles.col}
          >
            <Nav.Link as={Link} to={"/login"}>
              <FiUser className={styles.FaUser} color="white" />
              <span className={styles.user}>
                {props.user.username ?? "Login"}
              </span>
            </Nav.Link>
            {/* </Nav> */}
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cart,
  user: state.user
});

export default connect(mapStateToProps)(AppNavBar1);
