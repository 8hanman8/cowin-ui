import React, { Component } from "react";
import DropDownMenu from "../common/dropdown-menu/drop-down-menu";

class PlayGround extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "100px",
          marginLeft: "100px",
        }}
      >
        <div
          style={{
            border: "1px solid red",
            height: "75px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <DropDownMenu
            onChange={this.onChangeHandler}
            data={{
              title: "Vaccination Services",
              menuOptions: [
                {
                  key: "rm",
                  description: "Register Members",
                },
                {
                  key: "svc",
                  description: "Search Vacciation Center",
                },
                {
                  key: "bvs",
                  description: "Book Vaccination Slots",
                },
              ],
            }}
          />
        </div>
      </div>
    );
  }
  onChangeHandler = (key) => {
    console.log(key, "from parent");
  };
}

export default PlayGround;
