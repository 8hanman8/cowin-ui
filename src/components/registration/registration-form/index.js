import { PureComponent } from "react";
import { connect } from "react-redux";
import "./index.css";
import HealthyHeart from "./../../../assets/icons/healthy-heart.svg";
import { getOTP, verifyOTP } from "../../../redux/otp/otp-actions";
import { sha256 } from "js-sha256";

class RegistrationForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      mobileNumber: null,
      isOTPSent: false,
      otp: null,
    };
  }
  handleMobileNumber = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };
  submitMobileNumber = () => {
    const { findOTP } = this.props;
    findOTP(this.state.mobileNumber);
  };
  handleOTP = (event) => {
    const otp = event.target.value;
    this.setState({ otp: otp ? sha256(otp) : otp });
  };
  verifyOTP = () => {
    const { verifyOTP } = this.props;
    const payload = { txnId: this.props.otp.txnId, otp: this.state.otp };
    verifyOTP(payload);
  };
  render() {
    return (
      <div className="main-container">
        <div className="banner-container">
          <img src={HealthyHeart} alt="logo"></img>
        </div>
        <div className="title-container">
          <span>
            {this.state.isOTPSent
              ? "Verify OTP"
              : "Register Or SignIn for Vaccination"}
          </span>
        </div>
        <div className="note-container">
          <span>
            {this.state.isOTPSent
              ? `An OTP has been sent to ${this.state.mobileNumber}`
              : "An OTP will be sent to your mobile number for verification"}
          </span>
        </div>
        <div className="form-container">
          <div>
            {!this.state.isOTPSent ? (
              <input
                className="mobile-input"
                type="number"
                minLength="10"
                maxLength="10"
                placeholder="Enter your mobile number"
                onChange={this.handleMobileNumber}
              ></input>
            ) : (
              <input
                className="mobile-input"
                type="number"
                minLength="6"
                maxLength="6"
                placeholder="Enter OTP"
                onChange={this.handleOTP}
              ></input>
            )}
          </div>
          {this.state.isOTPSent ? (
            <div className="otp-received-note-container">
              <div className="resend-otp">
                <button className="resend-otp-btn">Resend OTP</button>
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
            {!this.state.isOTPSent ? (
              <button onClick={this.submitMobileNumber}>Get OTP</button>
            ) : (
              <button onClick={this.verifyOTP}>Verify & Proceed</button>
            )}
          </div>
        </div>
        <div className="using-container"></div>
        <div className="apps-container"></div>
      </div>
    );
  }
  componentDidUpdate() {
    const { isFetching, txnId, error, accessToken } = this.props.otp;
    if (!isFetching && !error && !!txnId) {
      this.setState({ isOTPSent: true });
    }
    if (error) {
      console.error(error);
    }
    if(accessToken){
      
    }
  }
}

const mapStateToProps = (state) => {
  return {
    otp: state.otp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findOTP: (mobileNumber) => {
      dispatch(getOTP(mobileNumber));
    },
    verifyOTP: (payload) => {
      dispatch(verifyOTP(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
