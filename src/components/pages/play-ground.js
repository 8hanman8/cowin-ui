import React, { Component } from "react";
import TextBox from "../common/text-box/text-box";

class PlayGround extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(-135deg, #c850c0, #4158d0)",
        }}
      >
        <TextBox placeholder="Enter you XXXX" />
      </div>
    );
  }
  onChangeHandler = (e) => {
    console.log(e.target.value);
  };
}

export default PlayGround;
