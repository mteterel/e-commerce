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
  PopoverContent
} from "react-bootstrap";
import MiniCart from "./MiniCart";
import { connect } from "react-redux";

const AppNavBar1 = props => {
  return (
    <Navbar bg="dark" variant="dark" style={{ padding: "1em" }}>
      <Container>
        <Navbar.Brand href="/">Omega Gaming</Navbar.Brand>
        <InputGroup style={{ width: "60%" }}>
          <FormControl type="text" placeholder="Search for products" />
          <InputGroup.Append>
            <Button>Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <Nav>
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
              <span>Cart&nbsp;</span>
              <Badge variant={"primary"}>{props.cartProducts.length}</Badge>
            </Nav.Link>
          </OverlayTrigger>
          <Nav.Link>
            <span>{props.user.username ?? "Not Logged In"}</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cart,
  user: state.user
});

export default connect(mapStateToProps)(AppNavBar1);
