import React from "react";
import { connect } from "react-redux";
import Button from "../../common/button/button";
import "./beneficiary-card.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { RiTimer2Fill } from "react-icons/ri";
import { BsCalendar } from "react-icons/bs";
import { downloadCertificate } from "../../../redux/beneficiaries/beneficiaries-actions";
class BeneficiaryCard extends React.PureComponent {
  render() {
    const {
      name,
      beneficiary_reference_id,
      birth_year,
      photo_id_type,
      photo_id_number,
      vaccination_status,
      dose1_date,
      dose2_date,
      vaccine,
      appointments,
      downloadMyCertificate,
      ...props
    } = this.props;
    return (
      <div className="main-container" {...props}>
        <div
          className={`row-0 ${!!dose1_date ? "vaccinated" : "not-vaccinated"}`}
        >
          <span>{vaccination_status}</span>
        </div>
        <div className="row-1">
          <span className="name">{name}</span>
          {" | "}
          <label>REF ID : </label>
          <span>
            {beneficiary_reference_id.slice(0, -4)}
            <span style={{ color: "red" }}>
              {beneficiary_reference_id.substr(-4)}
            </span>
          </span>
          {" | "}
          <span>Secret Code : {beneficiary_reference_id.substr(-4)}</span>
        </div>
        <div className="row-2">
          <span>
            <label>Year of Birth : </label>
            <span>
              <b>{birth_year}</b>
            </span>
          </span>
          <span>
            <label>Photo ID: </label>
            <span>
              <b>{photo_id_type}</b>
            </span>
          </span>
          <span>
            <label>ID Number: </label>
            <span>
              <b>{photo_id_number}</b>
            </span>
          </span>
        </div>
        <div
          className="row-3"
          style={{ border: `${!dose1_date ? "none" : ""}` }}
        >
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
                {vaccine}
              </span>
            </div>
            <div>
              <span style={{ float: "right", color: "green" }}>
                {appointments.length === 0
                  ? "Appointment Details not available"
                  : "Appointment Details available"}
              </span>
            </div>
          </div>
          <div>
            {!!dose1_date && !dose2_date ? (
              <Button type="roundedOutline" onClick={this.downloadCertificate}>
                <AiOutlineSafetyCertificate style={{ marginRight: "5px" }} />
                {"  "}
                <span>Certificate</span>
              </Button>
            ) : (
              ""
            )}
            {!dose1_date ? (
              <Button type="roundedOutline">
                <BsCalendar style={{ marginRight: "5px" }} />
                {"  "}
                <span>Schedule</span>
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={`row-4 ${!dose1_date ? "hidden" : ""}`}>
          <div style={{ width: "45%" }}>
            <div style={{ color: !!dose2_date ? "green" : "red" }}>
              <span
                style={{
                  fontWeight: "bold",
                  height: "16px",
                  width: "16px",
                }}
              >
                <RiTimer2Fill style={{ verticalAlign: "text-bottom" }} /> Dose 2
              </span>
            </div>
            <div>
              {!!dose2_date && appointments.length === 0 ? (
                <span style={{ float: "right", color: "green" }}>
                  Appointment Details not available
                </span>
              ) : (
                <span style={{ float: "right", color: "red" }}>
                  Due date 03/07/2021, Last date 31/07/2021
                </span>
              )}
            </div>
          </div>
          <div>
            {!!dose1_date && !dose2_date ? (
              <Button type="roundedOutline">
                <BsCalendar style={{ marginRight: "5px" }} />
                {"  "}
                <span>Schedule</span>
              </Button>
            ) : (
              ""
            )}
            {!!dose1_date && !!dose2_date ? (
              <Button type="roundedOutline" onClick={this.downloadCertificate}>
                <AiOutlineSafetyCertificate style={{ marginRight: "5px" }} />
                {"  "}
                <span>Certificate</span>
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
  downloadCertificate = () => {
    const { beneficiary_reference_id, downloadMyCertificate, name } =
      this.props;
    const fileName = `${
      name.replace(/\s+/g, "_").toLowerCase() + "_certificate"
    }`;
    downloadMyCertificate(beneficiary_reference_id, fileName);
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    downloadMyCertificate: (beneficiaryReferenceId, fileName) =>
      dispatch(downloadCertificate(beneficiaryReferenceId, fileName)),
  };
};

export default connect(null, mapDispatchToProps)(BeneficiaryCard);
