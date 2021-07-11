import React, { Component } from "react";
import { connect } from "react-redux";
import IdleTimer from "react-idle-timer";
import { logout } from "../../redux/otp/otp-actions";
import PopupModal from "../common/popup-modal.js";
import Button from "../common/button/button";

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
      `user is active and the time remaining is ${(
        this.idleTimerRef.current.getRemainingTime() /
        (1000 * 60)
      ).toFixed(2)} minutes`
    );
  };
  onIdle = (event) => {
    console.log(
      "user is idle and last active at",
      new Date(this.idleTimerRef.current.getLastActiveTime())
    );
    this.setState({ showPopup: "true" });
    this.sessioTimedoutRef.current = setInterval(() => {
      const { logout } = this.props;
      logout();
    }, 1000 * 60 * 3);
  };
  logoutMe = () => {
    const { logout } = this.props;
    clearInterval(this.sessioTimedoutRef.current);
    logout();
  };
  extendSession = () => {
    this.setState({ showPopup: "false" });
    console.log("Session extended");
    clearInterval(this.sessioTimedoutRef.current);
  };
  render() {
    return (
      <>
        <IdleTimer
          ref={this.idleTimerRef}
          timeout={1000 * 60 * 15}
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
                You are idle for 15 mins and your current session will be
                expired in 3 mins
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
                No
              </Button>
              <Button
                style={{ width: "20%", height: "30px" }}
                btnColor="#5CB95C"
                onClick={this.extendSession}
              >
                Yes
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
