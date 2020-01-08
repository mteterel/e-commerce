import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import { Helmet } from "react-helmet";
import layout from "./views/Layout";

function App() {
  return (
    <layout className={"App"}>
      <Helmet titleTemplate={"%s · e-commerce"} />
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </Router>
    </layout>
  );
}

export default App;
