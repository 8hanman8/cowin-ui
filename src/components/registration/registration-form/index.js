import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styles from "./index.module.css";
import HealthyHeart from "./../../../assets/icons/healthy-heart.svg";
import { getOTP, verifyOTP } from "../../../redux/otp/otp-actions";
import { sha256 } from "js-sha256";
import { toast } from "react-toastify";
import validator from "validator";
import Button from "../../common/button/button";
import TextBox from "../../common/text-box/text-box";

class RegistrationForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      mobileNumber: "",
      otp: "",
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
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.bannerContainer}`}>
          <img
            src={HealthyHeart}
            alt="logo"
            className={`${styles.bannerContainerImg}`}
          ></img>
        </div>
        <div className={`${styles.titleContainer}`}>
          <span>
            {this.props.otp.isOTPSent
              ? "Verify OTP"
              : "Register Or SignIn for Vaccination"}
          </span>
        </div>
        <div className={`${styles.noteContainer}`}>
          <span>
            {this.props.otp.isOTPSent
              ? `An OTP has been sent to ${this.maskMobileNumber()}`
              : "An OTP will be sent to your mobile number for verification"}
          </span>
        </div>
        <div className={`${styles.formContainer}`}>
          <div>
            {!this.props.otp.isOTPSent
              ? this.renderMobileNumberInput()
              : this.renderOTPInput()}
          </div>
          {this.props.otp.isOTPSent ? (
            <div className={`${styles.otpReceivedNoteContainer}`}>
              <div
                className={`${
                  !this.state.enableResendOtpButton ? `${styles.hidden}` : ""
                }`}
              >
                <Button
                  onClick={this.resendOTP}
                  type="text"
                  style={{ width: "80%", marginTop: "15px" }}
                >
                  Resend OTP
                </Button>
              </div>
              <div className={`${styles.note}`}>
                There might be some deley in receiving the OTP due to heavy
                traffic
              </div>
            </div>
          ) : (
            ""
          )}
          <div>
            {!this.props.otp.isOTPSent ? (
              <Button
                btnColor="#001F60"
                onClick={this.submitMobileNumber}
                type="block"
                style={{ width: "80%", marginTop: "15px" }}
              >
                Get OTP
              </Button>
            ) : (
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
      <TextBox
        minLength="10"
        maxLength="10"
        placeholder="Enter your mobile number"
        onChange={this.handleMobileNumber}
        onBlur={this.handleOnBlurMobileNumber}
        value={this.state.mobileNumber}
        invalid={this.state.isMobileNumberNotValid}
        number
      />
    );
  };
  renderOTPInput = () => {
    return (
      <TextBox
        minLength="6"
        maxLength="6"
        placeholder="Enter OTP"
        onChange={this.handleOTP}
        value={this.state.otp}
        invalid={this.state.isOTPNotValid}
        number
      />
    );
  };
  handleOnBlurMobileNumber = () => {
    if (validator.isMobilePhone(this.state.mobileNumber, "en-IN")) {
      this.setState({ isMobileNumberNotValid: false });
    }
  };
  isAllowInput = (event) => {
    const allowedKeyCodes = [8, 37, 39, 46];
    if (
      !validator.isNumeric(event.key) &&
      !allowedKeyCodes.includes(event.keyCode)
    ) {
      event.preventDefault();
    }
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
