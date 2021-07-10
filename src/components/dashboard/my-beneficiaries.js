import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getBeneficiaries } from "../../redux/beneficiaries/beneficiaries-actions";

class MyBeneficiaries extends PureComponent {
  render() {
    const { beneficiaries } = this.props.beneficiaries;
    return (
      <div>
        <h1>My Beneficiaries count: {beneficiaries.length}</h1>
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
