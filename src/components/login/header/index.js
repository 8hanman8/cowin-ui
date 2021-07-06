import React, { Component } from "react";
import EmblemWhite from "./../../../assets/icons/emblem_white.png";
import {
  AiFillQuestionCircle,
  AiOutlineCode,
  AiFillDashboard,
} from "react-icons/ai";
import { FcDepartment } from "react-icons/fc";
import { FaSyringe } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="flex-item1">
          <img src={EmblemWhite} className="logo" alt="emblem" />
          <span>Ministry of Health and Family Welfare</span>
        </div>
        <div className="flex-item2">
          <ul>
            <li>
              <AiFillQuestionCircle className="icon" />
              FAQ
            </li>
            <li>
              <AiFillDashboard className="icon" />
              Dashboard
            </li>
            <li>
              <AiOutlineCode className="icon" />
              Open APIs
            </li>
            <li>
              <FcDepartment className="icon"/>
              Department Login
            </li>
            <li>
              <FaSyringe className="icon" />
              Vaccinator
            </li>
            <li>
              <BiCheckShield className="icon" />
              Verfiy Certificate
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
