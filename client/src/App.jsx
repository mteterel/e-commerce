import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import { Helmet } from "react-helmet";
import Layout from "./views/Layout";
import Product from "./views/Product";
import Browse from "./views/Browse";
import Cart from "./views/Cart";

const App = () => {
  return (
    <Layout className={"App"}>
      <Helmet titleTemplate={"%s · e-commerce"} />
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/browse/:id"} component={Browse} />
          <Route exact path={"/product/:id"} component={Product} />
          <Route exact path={"/cart"} component={Cart} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
