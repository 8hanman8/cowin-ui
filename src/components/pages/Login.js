import React, { Component } from "react";
import PopupModal from "../common/popup-modal.js";
import Banner from "../login/banner";
import Header from "../login/header";
import Header2 from "../login/header2";

export class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Header2 />
        <Banner />
        <PopupModal
          show={true}
          onClose={this.closedPopup}
          header="Sample Title"
          body={
            <>
              <p>Some text in the Modal Body3</p>
              <p>Some other text...</p>
            </>
          }
          footer={
            <button
              onClick={() => console.log("clicked save")}
              style={{ backgroundColor: "red", border: "none" }}
            >
              Save
            </button>
          }
        />
      </div>
    );
  }
  closedPopup = () => {
    console.log("closed event received in parent component");
  };
}

export default Login;
