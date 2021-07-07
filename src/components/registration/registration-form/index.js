import { PureComponent } from "react";
import { connect } from "react-redux";
import "./index.css";
import HealthyHeart from "./../../../assets/icons/healthy-heart.svg";
import { getOTP } from "../../../redux/otp/otp-actions";

class RegistrationForm extends PureComponent {
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
    const { findOTP } = this.props;
    findOTP(this.state.mobileNumber);
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
  componentDidUpdate() {
    const { isFetching, txnId, error } = this.props.otp;
    if (!isFetching && !error && !!txnId) {
      alert("Redirect to OTP enter");
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
