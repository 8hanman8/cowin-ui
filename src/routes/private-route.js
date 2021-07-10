import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class PrivateRoute extends PureComponent {
  render() {
    const { isLoggedIn, path, component: Component, ...rest } = this.props;
    if (isLoggedIn) {
      if (path === "/") {
        return <Redirect to="/dashboard" />;
      }
      return <Component {...rest} />;
    } else {
      if (path === "/") {
        return <Component {...rest} />;
      } else {
        return <Redirect to="/register" />;
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.otp.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
