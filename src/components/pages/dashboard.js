import React, { PureComponent } from "react";
import Footer from "../registration/footer";
import Header from "../registration/header";
import Header2 from "../registration/header2";
import MyBeneficiaries from "../dashboard/my-beneficiaries";
import SessionIdleTimer from "../common/idle-timer";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.sessionTimoutModal = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <Header showLogoutIcon />
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
          <MyBeneficiaries />
        </div>
        <Footer />
        <SessionIdleTimer />
      </React.Fragment>
    );
  }
}

export default Dashboard;
