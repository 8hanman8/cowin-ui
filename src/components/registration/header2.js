import React, { Component } from "react";
import Covid19logo from "../../assets/icons/covid19logo.jpg";
import DropDownMenu from "../common/dropdown-menu/drop-down-menu";
import {
  VACCINATION_SERVICES_DROPDOWN_DATA,
  PLATFORMS_DROPDOWN_DATA,
  RESOURCES_DROPDOWN_DATA,
  SUPPORT_DROPDOWN_DATA,
} from "./registration-utils";

class Header2 extends Component {
  render() {
    return (
      <div style={styles.header}>
        <div style={{ marginLeft: "220px", paddingTop: "5px", width: "28%" }}>
          <img src={Covid19logo} alt="logo" style={{ width: 185 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <DropDownMenu data={VACCINATION_SERVICES_DROPDOWN_DATA} />
          <DropDownMenu
            data={PLATFORMS_DROPDOWN_DATA}
            style={{ marginLeft: "20px" }}
          />
          <DropDownMenu
            data={RESOURCES_DROPDOWN_DATA}
            style={{ marginLeft: "20px" }}
          />
          <DropDownMenu
            data={SUPPORT_DROPDOWN_DATA}
            style={{ marginLeft: "20px" }}
          />
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
    display: "flex",
  },
};

export default Header2;
