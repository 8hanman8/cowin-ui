import React, { Component } from "react";
import { Link } from "react-router-dom";
import Covid19logo from "../../../assets/icons/covid19logo.jpg";
import "./index.css";
import Button from "../../common/button/button";
class Header2 extends Component {
  render() {
    return (
      <div className="header2">
        <div className="flex-item1">
          <img src={Covid19logo} alt="logo" style={{ width: 185 }} />
        </div>
        <div className="flex-item2">
          <Link
            to="/register"
            className="direct-link"
            style={{ textDecoration: "none" }}
          >
            {/* <button id="regSignBtn">Register/ Sign in yourself</button> */}
            <Button
              btnColor="#ffc002"
              labelColor="#001f60"
              type="block"
              style={{
                width: "100%",
                fontWeight: "700",
                padding: "10px 35px",
              }}
            >
              Register/ Sign in yourself
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header2;
