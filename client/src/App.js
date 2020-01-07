import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
