import React from "react";
import { IoIosHelpCircle } from "react-icons/io";
import "./help.css";

function Help(props) {
  return (
    <div className="help-container" tooltip={props.tooltip}>
      <IoIosHelpCircle className="q-icon"></IoIosHelpCircle>
    </div>
  );
}

export default Help;
