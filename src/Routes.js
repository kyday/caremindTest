import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Pages/1-1/Nav";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/nav' component={Nav} />
      </Switch>
    </Router>
  );
}

export default Routes;
