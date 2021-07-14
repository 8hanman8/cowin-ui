import React, { Component } from "react";
import validator from "validator";
import styles from "./text-box.module.css";

class TextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    const { invalid, number, ...rest } = this.props;
    return (
      <input
        className={`${styles.textbox} ${invalid ? styles.error : ""}`}
        type="text"
        {...(number && { onKeyDown: this.isAllowInput })}
        {...rest}
      ></input>
    );
  }
  isAllowInput = (event) => {
    const allowedKeyCodes = [8, 37, 39, 46];
    if (
      !validator.isNumeric(event.key) &&
      !allowedKeyCodes.includes(event.keyCode)
    ) {
      event.preventDefault();
    }
  };
}

export default TextBox;
