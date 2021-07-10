import React, { Component } from "react";
import { connect } from "react-redux";
import EmblemWhite from "./../../assets/icons/emblem_white.png";
import { RiLogoutBoxLine } from "react-icons/ri";
import { logout } from "../../redux/otp/otp-actions";

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <div style={styles.flexItem1}>
          <img
            src={EmblemWhite}
            className="logo"
            alt="emblem"
            style={styles.logo}
          />
          <span style={{ marginLeft: "10px", fontWeight: "400" }}>
            Ministry of Health and Family Welfare
          </span>
        </div>
        <div style={styles.flexItem2}>
          {this.props.showLogoutIcon ? (
            <div style={styles.logoutIcon} onClick={this.logout}>
              <RiLogoutBoxLine
                style={{ verticalAlign: "text-bottom", marginRight: "3px" }}
              />
              <span>Logout</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  logout = () => {
    const { logoutMe } = this.props;
    logoutMe();
  };
}

const styles = {
  header: {
    backgroundColor: "#001f60",
    height: "50px",
    color: "white",
    display: "flex",
    alignItems: "center",
    font: "14px Roboto, sans-serif",
    width: "100%",
  },
  flexItem1: {
    marginLeft: "220px",
    width: "30%",
    lineHeight: "35px",
  },
  logo: {
    float: "left",
    width: "23px",
    height: "35px",
  },
  flexItem2: {
    width: "70%",
  },
  logoutIcon: {
    cursor: "pointer",
    float: "right",
    marginRight: "20px",
  },
};

const mapDispatchToState = (dispatch) => {
  return {
    logoutMe: () => dispatch(logout()),
  };
};
export default connect(null, mapDispatchToState)(Header);
