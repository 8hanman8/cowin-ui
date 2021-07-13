import React, { Component } from "react";
import TextBox from "../common/text-box/text-box";

class PlayGround extends Component {
  render() {
    return (
        <TextBox
          onChange={this.onChangeHandler}
          label="Name"
          placeholder =" enter ur"
          invalid
        />
    );
  }
  onChangeHandler = (e) => {
    console.log(e.target.value);
  };
}

export default PlayGround;
