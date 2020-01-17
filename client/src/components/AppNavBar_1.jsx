import React from "react";
import {
  Badge,
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  PopoverContent,
  Row,
  Col
} from "react-bootstrap";
import MiniCart from "./MiniCart";
import { connect } from "react-redux";
import Logo from "../assets/master.png";
import { 
  FaSearch, 
  FaUser,
  FaShoppingCart
 } from "react-icons/fa";
import styles from "./AppNavBar_1.module.scss";

const AppNavBar1 = props => {
  return (
    <Navbar bg="dark" variant="dark" style={{ padding: "1em" }}>
      <Container>
        <Row>
          <Col xs lg="2">
            <Navbar.Brand href="/"><img src={Logo} className={styles.BaseLogo}/></Navbar.Brand>
          </Col>
          <Col xs lg="8">
            <InputGroup className={styles.search_bar}>
              <FormControl className={styles.search} type="search" placeholder="Search for products"/>
              <InputGroup.Append>
                <Button className={styles.SearchButton}><FaSearch className={styles.FaSearch}/></Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col xs lg="1">
          {/* <Nav> */}
          {/* <div className={styles.test}> */}
            <OverlayTrigger
              trigger={"click"}
              placement="bottom"
              overlay={
                <Popover id={"popover-mini-cart"}>
                  <PopoverContent>
                    <MiniCart />
                  </PopoverContent>
                </Popover>
              }
            >
              
              <Nav.Link>
                <div className={styles.testdiv}>
                <FaShoppingCart className={styles.FaShoppingCart} color="white"/>              
                <Badge pill variant={"primary"} className={styles.BadgeCart}>{props.cartProducts.length}</Badge>
                </div>
                <span className={styles.cart}>Shopping&nbsp;</span>
              </Nav.Link>
            </OverlayTrigger>
          {/* </div> */}
          </Col>
          <Col xs lg="1">
            <Nav.Link>  
              <FaUser className={styles.FaUser} color="white"/>
              <span className={styles.user}>{props.user.username ?? "Account"}</span>
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
