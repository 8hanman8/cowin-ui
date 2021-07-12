import React, { Component } from "react";
import { connect } from "react-redux";
import IdleTimer from "react-idle-timer";
import { logout } from "../../redux/otp/otp-actions";
import PopupModal from "../common/popup-modal.js";
import Button from "../common/button/button";
import moment from "moment";

class SessionIdleTimer extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: "false",
    };
    this.idleTimerRef = React.createRef();
    this.sessioTimedoutRef = React.createRef();
  }
  onAction = (event) => {
    console.log(
      `user is active and the time remaining is ${moment
        .duration(this.idleTimerRef.current.getRemainingTime())
        .minutes()} minutes`
    );
  };
  onIdle = (event) => {
    console.log(
      "user is idle and last active at",
      moment(this.idleTimerRef.current.getLastActiveTime()).format(
        process.env.REACT_APP_DATE_FORMAT
      )
    );
    this.setState({ showPopup: "true" });
    this.sessioTimedoutRef.current = setTimeout(() => {
      const { logout } = this.props;
      logout();
    }, parseInt(process.env.REACT_APP_SESSION_TIMEOUT_WARNING_IN_SECONDS) * 1000);
  };
  logoutMe = () => {
    const { logout } = this.props;
    clearTimeout(this.sessioTimedoutRef.current);
    logout();
  };
  extendSession = () => {
    this.setState({ showPopup: "false" });
    console.log("Session extended");
    clearTimeout(this.sessioTimedoutRef.current);
  };
  render() {
    return (
      <>
        <IdleTimer
          ref={this.idleTimerRef}
          timeout={
            parseInt(process.env.REACT_APP_SESSION_TIMEOUT_IN_SECONDS) * 1000
          }
          onAction={this.onAction}
          onIdle={this.onIdle}
          debounce={250}
        />
        <PopupModal
          ref={this.sessionTimoutModal}
          style={{ color: "black" }}
          show={this.state.showPopup}
          onClose={this.logoutMe}
          header="Session Timeout"
          noClose={true}
          body={
            <>
              <p>
                You are idle for{" "}
                {moment
                  .duration(
                    parseInt(process.env.REACT_APP_SESSION_TIMEOUT_IN_SECONDS) *
                      1000
                  )
                  .minutes()}{" "}
                minutes and your current session will be expired in{" "}
                {moment
                  .duration(
                    parseInt(
                      process.env.REACT_APP_SESSION_TIMEOUT_WARNING_IN_SECONDS
                    ) * 1000
                  )
                  .minutes()}{" "}
                minutes
              </p>
              <p>Would you like to continue the session?</p>
            </>
          }
          footer={
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Button
                style={{ width: "20%", marginRight: "15px", height: "30px" }}
                btnColor="#DA524E"
                onClick={this.logoutMe}
              >
                Log out
              </Button>
              <Button
                style={{ width: "35%", height: "30px" }}
                btnColor="#5CB95C"
                onClick={this.extendSession}
              >
                Keep Me Sign In
              </Button>
            </div>
          }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(SessionIdleTimer);
