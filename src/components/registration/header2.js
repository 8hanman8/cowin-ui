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
    boxShadow: "1px 2px 1px 0 #ccc",
  },
};

export default Header2;
