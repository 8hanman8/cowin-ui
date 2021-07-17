import React from "react";
import Button from "../../common/button/button";
import "./beneficiary-card.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { RiTimer2Fill } from "react-icons/ri";
import { BsCalendar } from "react-icons/bs";
class BeneficiaryCard extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    return (
      <div className="main-container" {...props}>
        <div className="row-1">
          <span className="name">Junjuru Hanmandlu</span>
          {" | "}
          <label>REF ID : </label>
          <span>32599329458900</span>
          {" | "}
          <span>Secret Code : 8700</span>
        </div>
        <div className="row-2">
          <span>
            <label>Year of Birth : </label>
            <span>
              <b>1975</b>
            </span>
          </span>
          <span>
            <label>Photo ID: </label>
            <span>
              <b>Aadhaar Card</b>
            </span>
          </span>
          <span>
            <label>ID Number: </label>
            <span>
              <b>XXXX-6189</b>
            </span>
          </span>
        </div>
        <div className="row-3">
          <div style={{ width: "45%" }}>
            <div>
              <span style={{ color: "green", fontWeight: "bold" }}>
                <GoVerified
                  color="green"
                  style={{ verticalAlign: "text-bottom" }}
                />{" "}
                Dose 1
              </span>
              {" | "}{" "}
              <span style={{ color: "#4d4d4d", fontWeight: "bold" }}>
                COVISHIELD
              </span>
            </div>
            <div>
              <span style={{ float: "right", color: "green" }}>
                Appointment Details not available
              </span>
            </div>
          </div>
          <div>
            <Button type="roundedOutline">
              <AiOutlineSafetyCertificate style={{ marginRight: "5px" }} />
              {"  "}
              <span>Certificate</span>
            </Button>
          </div>
        </div>
        <div className="row-4">
          <div style={{ width: "%" }}>
            <div>
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  height: "16px",
                  width: "16px",
                }}
              >
                <RiTimer2Fill
                  color="red"
                  style={{ verticalAlign: "text-bottom" }}
                />{" "}
                Dose 2
              </span>
            </div>
            <div>
              <span style={{ float: "right", color: "red" }}>
                Due date 03/07/2021, Last date 31/07/2021 
              </span>
            </div>
          </div>
          <div>
            <Button type="roundedOutline">
              <BsCalendar style={{ marginRight: "5px" }} />
              {"  "}
              <span>Schedule</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default BeneficiaryCard;
