import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./index.css";

class Spinner extends PureComponent {
  render() {
    const { loading } = this.props.spinnerLoading;
    // return (
    //   <div
    //     className={`spin ${
    //       this.props.loading || this.props.loading === true ? "" : "hidden"
    //     }`}
    //   ></div>
    // );
    return <div className={`spin ${loading === true ? "" : "hidden"}`}></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    spinnerLoading: state.spinnerLoading,
  };
};
export default connect(mapStateToProps, null)(Spinner);
