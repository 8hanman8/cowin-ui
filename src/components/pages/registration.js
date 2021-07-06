import React, { Component } from "react";
import Footer from "../registration/footer";
import Header from "../registration/header";
import Header2 from "../registration/header2";

class Registration extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Header2 />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Registration;
