import React, { Component } from "react";
import "./text-box.css";
import validator from "validator";

class TextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="input-data">
          <input
            type="text"
            required
            onKeyDown={this.isAllowInput}
            onChange={this.handleValue}
            {...this.props}
          />
          <div
            className={`underline ${this.props.invalid ? "invalid" : ""}`}
          ></div>
          <label>{this.props.label}</label>
        </div>
      </div>
    );
  }
  handleValue = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };
  isAllowInput = (event) => {
    const allowedKeyCodes = [8, 37, 39, 46];
    if (this.props.number) {
      console.log(event.key, event.keyCode);
      if (
        !validator.isNumeric(event.key) &&
        !allowedKeyCodes.includes(event.keyCode)
      ) {
        event.preventDefault();
      }
    }
  };
}

export default TextBox;
