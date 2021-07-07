import React, { Component } from "react";
import "./index.css";
import HealthyHeart from "./../../../assets/icons/healthy-heart.svg";

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      mobileNumber: null,
    };
  }
  handleMobileNumber = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };
  submitMobileNumber = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="main-container">
        <div className="banner-container">
          <img src={HealthyHeart} alt="logo"></img>
        </div>
        <div className="title-container">
          <span>Register Or SignIn for Vaccination</span>
        </div>
        <div className="note-container">
          <span>
            An OTP will be sent to your mobile number for verification
          </span>
        </div>
        <div className="form-container">
          <div>
            <input
              className="mobile-input"
              type="number"
              minLength="10"
              maxLength="10"
              placeholder="Enter your mobile number"
              onChange={this.handleMobileNumber}
            ></input>
          </div>
          <div>
            <button onClick={this.submitMobileNumber}>Get OTP</button>
          </div>
        </div>
        <div className="using-container"></div>
        <div className="apps-container"></div>
      </div>
    );
  }
}

export default RegistrationForm;
