import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./views/Product";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Browse from "./views/Browse";
import Login from "./views/Login";
import Register from "./views/Register";
import { Helmet } from "react-helmet";
import _BaseLayout from "./views/_BaseLayout";
import Configomatic from "./views/Configomatic";

const App = () => {
  return (
    <div>
      <Helmet titleTemplate={"%s · e-commerce"} />
      <Router>
        <_BaseLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/browse/:categoryId"} component={Browse} />
            <Route exact path={"/product/:productId"} component={Product} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/configomatic"} component={Configomatic}/>
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </_BaseLayout>
      </Router>
    </div>
  );
};

export default App;
