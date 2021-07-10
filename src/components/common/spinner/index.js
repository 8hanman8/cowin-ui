import React, { PureComponent } from "react";
import "./index.css";

class Spinner extends PureComponent {
  render() {
    return (
      <div
        className={`spin ${
          this.props.loading || this.props.loading === true ? "" : "hidden"
        }`}
      ></div>
    );
  }
}
export default Spinner;
