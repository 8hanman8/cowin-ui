import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./index.css";
import HealthyHeart from "./../../../assets/icons/healthy-heart.svg";
import { getOTP, verifyOTP } from "../../../redux/otp/otp-actions";
import { sha256 } from "js-sha256";
import { toast } from "react-toastify";
import Spinner from "../../common/spinner";
import validator from "validator";
import Button from "../../common/button/button";

class RegistrationForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      mobileNumber: "",
      otp: "null",
      isMobileNumberNotValid: false,
      isOTPNotValid: false,
      enableResendOtpButton: false,
    };
  }
  handleMobileNumber = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };
  submitMobileNumber = () => {
    const { getOTP } = this.props;
    if (!validator.isMobilePhone(this.state.mobileNumber, "en-IN")) {
      this.setState({ isMobileNumberNotValid: true });
      return;
    }
    getOTP(this.state.mobileNumber);
  };
  handleOTP = (event) => {
    const otp = event.target.value;
    this.setState({ otp: otp });
  };
  verifyOTP = () => {
    const { verifyOTP } = this.props;
    if (!this.state.otp || this.state.otp.length !== 6) {
      this.setState({ isOTPNotValid: true });
      return;
    }
    const payload = {
      txnId: this.props.otp.txnId,
      otp: sha256(this.state.otp),
    };
    verifyOTP(payload);
  };
  resendOTP = () => {
    const { getOTP } = this.props;
    getOTP(this.state.mobileNumber);
  };
  render() {
    return (
      <div className="main-container">
        <div className="banner-container">
          <img src={HealthyHeart} alt="logo"></img>
        </div>
        <div className="title-container">
          <span>
            {this.props.otp.isOTPSent
              ? "Verify OTP"
              : "Register Or SignIn for Vaccination"}
          </span>
        </div>
        <div className="note-container">
          <span>
            {this.props.otp.isOTPSent
              ? `An OTP has been sent to ${this.maskMobileNumber()}`
              : "An OTP will be sent to your mobile number for verification"}
          </span>
        </div>
        <div className="form-container">
          <div>
            {!this.props.otp.isOTPSent
              ? this.renderMobileNumberInput()
              : this.renderOTPInput()}
          </div>
          {this.props.otp.isOTPSent ? (
            <div className="otp-received-note-container">
              <div
                className={`resend-otp ${
                  !this.state.enableResendOtpButton ? "hidden" : ""
                }`}
              >
                <button className="resend-otp-btn" onClick={this.resendOTP}>
                  Resend OTP
                </button>
              </div>
              <div className="note">
                There might be some deley in receiving the OTP due to heavy
                traffic
              </div>
            </div>
          ) : (
            ""
          )}
          <div>
            {!this.props.otp.isOTPSent ? (
              // <button onClick={this.submitMobileNumber}>Get OTP</button>
              <Button
                btnColor="#001F60"
                onClick={this.submitMobileNumber}
                type="block"
                style={{ width: "80%", marginTop: "15px" }}
              >
                Get OTP
              </Button>
            ) : (
              // <button onClick={this.verifyOTP}>Verify & Proceed</button>
              <Button
                btnColor="#001F60"
                onClick={this.verifyOTP}
                type="block"
                style={{ width: "80%", marginTop: "15px" }}
              >
                Verify & Proceed
              </Button>
            )}
          </div>
        </div>
        <div
          className="using-container"
          style={{ width: "50%", marginTop: "20px" }}
        ></div>
        <div className="apps-container"></div>
        <Spinner loading={this.props.otp.loading} />
      </div>
    );
  }
  componentDidUpdate() {
    const { error } = this.props.otp;

    if (error) {
      console.error(error);
      toast.error(
        error ? error : "Something went wrong, please try again later",
        {
          position: toast.POSITION.BOTTOM_LEFT,
        }
      );
    }
    if (this.props.otp.isOTPSent) {
      const timeout = setTimeout(() => {
        this.setState({ enableResendOtpButton: true });
        clearInterval(timeout);
      }, 60 * 1000);
    }
  }
  renderMobileNumberInput = () => {
    return (
      <input
        className={`mobile-input ${
          this.state.isMobileNumberNotValid ? "error" : ""
        }`}
        type="number"
        minLength="10"
        maxLength="10"
        placeholder="Enter your mobile number"
        onChange={this.handleMobileNumber}
        value={this.state.mobileNumber}
      ></input>
    );
  };
  renderOTPInput = () => {
    return (
      <input
        className={`otp-input ${this.state.isOTPNotValid ? "error" : ""}`}
        type="number"
        minLength="6"
        maxLength="6"
        placeholder="Enter OTP"
        onChange={this.handleOTP}
        value={this.state.otp}
      ></input>
    );
  };
  maskMobileNumber = () => {
    if (!this.state.mobileNumber) {
      return "";
    }
    const masked = this.state.mobileNumber
      .toString()
      .split("")
      .map((e, i) => (i <= 5 ? "X" : e));
    return (
      masked.slice(0, 3).join("") +
      " " +
      masked.slice(3, 6).join("") +
      " " +
      masked.slice(6).join("")
    );
  };
}

const mapStateToProps = (state) => {
  return {
    otp: state.otp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOTP: (mobileNumber) => {
      dispatch(getOTP(mobileNumber));
    },
    verifyOTP: (payload) => {
      dispatch(verifyOTP(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
