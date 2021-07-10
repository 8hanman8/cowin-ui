import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/pages/login";
import Registration from "../components/pages/registration";
import NotFound from "../components/pages/not-found";
import Dashboard from "../components/pages/dashboard";
import PrivateRoute from "./private-route";

class RouterOutlet extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" component={Login} />
        {/* <Route exact strict path="/register" component={Registration} /> */}
        <PrivateRoute exact strict path="/register" component={Registration} />
        <PrivateRoute exact strict path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default RouterOutlet;
