import {
  GET_BENEFICIARIES,
  GET_BENEFICIARIES_SUCCESS,
  GET_BENEFICIARIES_FAILURE,
} from "./beneficiaries-types";

function getBeneficiaries() {
  return {
    type: GET_BENEFICIARIES,
  };
}

function getBeneficiariesSuccess(beneficiaries) {
  return {
    type: GET_BENEFICIARIES_SUCCESS,
    beneficiaries: beneficiaries,
  };
}
function getBeneficiariesFailure(error) {
  return {
    type: GET_BENEFICIARIES_FAILURE,
    error: error,
  };
}
export { getBeneficiaries, getBeneficiariesSuccess, getBeneficiariesFailure };
