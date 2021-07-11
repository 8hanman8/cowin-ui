import React, { Component } from "react";
import Banner from "../login/banner";
import Header from "../login/header";
import Header2 from "../login/header2";

export class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Header2 />
        <Banner />
      </div>
    );
  }
}

export default Login;
