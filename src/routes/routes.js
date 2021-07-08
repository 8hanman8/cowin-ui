import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/pages/login";
import Registration from "../components/pages/registration";
import NotFound from '../components/pages/not-found'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Registration} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
