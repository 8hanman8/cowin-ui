import React, { Component } from "react";
import LargestVaccineBanner from "../../assets/icons/largest-vaccine-banner.jpg";

class Banner extends Component {
  render() {
    return (
      <div style={styles.containerStyles}>
        <img
          src={LargestVaccineBanner}
          alt="logo"
          style={styles.imgStyles}
        ></img>
      </div>
    );
  }
}

const styles = {
  containerStyles: {
    marginTop: "20px",
  },
  imgStyles: {
    marginLeft: "-8px",
    width: "1280px",
  },
};

export default Banner;
