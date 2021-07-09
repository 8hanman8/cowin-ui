import React, { PureComponent } from "react";
import Footer from "../registration/footer";
import Header from "../registration/header";
import Header2 from "../registration/header2";

class Dashboard extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Header2 />
        <div
          style={{
            backgroundColor: "#F6F6F6",
            position: "absolute",
            top: "122px",
            bottom: "40px",
            width: "100%",
            overflow: "scroll",
          }}
        >
          This is Dashboard page
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Dashboard;
