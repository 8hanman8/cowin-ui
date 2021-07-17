import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getBeneficiaries } from "../../redux/beneficiaries/beneficiaries-actions";
import styles from "./dashboard.module.css";
import Button from "../common/button/button";
import BeneficiaryCard from "./beneficiary-card/beneficiary-card";

class MyBeneficiaries extends PureComponent {
  render() {
    const { beneficiaries } = this.props.beneficiaries;
    return (
      <div className={styles.mainContainer}>
        <div className={`${styles.defaultFont}`}>
          <span style={{ fontSize: "1.17em", fontWeight: "bold" }}>
            Account Details
          </span>
        </div>
        <div className={styles.detailsContainer}>
          <span>
            Registered Mobile Number:{" "}
            <span className={styles.mobile}>XXX-XXX-9999</span>
          </span>
          <span style={{ marginRight: "1rem" }}>
            <Button type="outline" style={{ width: "10rem" }}>
              Raise an Issue
            </Button>
          </span>
        </div>
        <div className={styles.beneficiariesContainer}>
          {beneficiaries.map((beneficiary, index) => (
            <BeneficiaryCard key={index} style={{ marginTop: "1rem" }} />
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { fetchBeneficiaries } = this.props;
    fetchBeneficiaries();
  }
}

const mapStateToProps = (state) => {
  return {
    beneficiaries: state.beneficiaries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeneficiaries: () => dispatch(getBeneficiaries()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBeneficiaries);
