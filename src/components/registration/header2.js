import React, { Component } from "react";
import Covid19logo from "../../assets/icons/covid19logo.jpg";

class Header2 extends Component {
  render() {
    return (
      <div style={styles.header}>
        <div style={{ marginLeft: "220px", paddingTop: "5px" }}>
          <img src={Covid19logo} alt="logo" style={{ width: 185 }} />
        </div>
      </div>
    );
  }
}
const styles = {
  header: {
    width: "100%",
    height: "70px",
    boxShadow: "0px 2px #d7d7d7",
  },
};

export default Header2;
