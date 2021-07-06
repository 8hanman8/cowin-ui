import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/pages/login";
import Registration from "../components/pages/registration";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Registration} />
      </Switch>
    );
  }
}

export default Routes;
