import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Pages/1-1/Nav";
import PageNumber from "./Pages/1-2/Components/FontSize";
import PieChart from "./Pages/2-2/PieChart";
import FormLogin from "./Pages/2-3";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Nav} />
        <Route exact path='/pageNumber' component={PageNumber} />
        <Route exact path='/piechart' component={PieChart} />
        <Route exact path='/login' component={FormLogin} />
      </Switch>
    </Router>
  );
}

export default Routes;
