import React, { Component } from "react";
import { connect } from "react-redux";
import IdleTimer from "react-idle-timer";
import { logout } from "../../redux/otp/otp-actions";

class SessionIdleTimer extends Component {
  constructor() {
    super();
    this.idleTimerRef = React.createRef();
    this.idleTimer = null;
  }
  onAction = (event) => {
    console.log(
      `user is active and the time remaining is ${
        (this.idleTimer.getRemainingTime() / (1000 * 60)).toFixed(2)
      } minutes`
    );
  };
  onIdle = (event) => {
    console.log(
      "user is idle and last active at",
      new Date(this.idleTimer.getLastActiveTime())
    );
    const { logout } = this.props;
    logout();
  };
  render() {
    return (
      <>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          timeout={1000 * 60 * 15}
          onAction={this.onAction}
          onIdle={this.onIdle}
          debounce={250}
        />
        {/*One minutes*/}
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
