import React, { Component } from "react";
import EmblemWhite from "./../../assets/icons/emblem_white.png";

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <div style={styles.flexItem1}>
          <img src={EmblemWhite} className="logo" alt="emblem" style={styles.logo}/>
          <span style={{ marginLeft: "10px",fontWeight:"400"}}>Ministry of Health and Family Welfare</span>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "#001f60",
    height: "50px",
    color: "white",
    display: "flex",
    alignItems: "center",
    font: "14px Roboto, sans-serif",
    width: "100%"
  },
  flexItem1: {
    marginLeft: "220px",
    width: "30%",
    lineHeight: "35px"
  },
  logo: {
    float: "left",
    width: "23px",
    height: "35px",
  },
};

export default Header;
