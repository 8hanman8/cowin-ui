import React, { Component } from "react";
import LargestVaccineBanner from "../../assets/icons/largest-vaccine-banner.jpg";

class Banner extends Component {
  render() {
    const containerStyles = {
      marginTop: "20px",
    };
    const imgStyles = {
      marginLeft: "-8px",
      width: "1280px",
    };
    return (
      <div style={containerStyles}>
        <img src={LargestVaccineBanner} alt="logo" style={imgStyles}></img>
      </div>
    );
  }
}

export default Banner;
