import React, { Component } from "react";
import Help from "../common/help/help";
class PlayGround extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "200px",
          marginLeft: "900px",
        }}
      >
        <Help tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Help>
      </div>
    );
  }
  onChangeHandler = (key) => {
    console.log(key, "from parent");
  };
}

export default PlayGround;
