import {
  GET_BENEFICIARIES,
  GET_BENEFICIARIES_SUCCESS,
  GET_BENEFICIARIES_FAILURE,
  DOWNLOAD_CERTIFICATE,
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
function downloadCertificate(beneficiaryReferenceId, fileName) {
  return {
    type: DOWNLOAD_CERTIFICATE,
    beneficiaryReferenceId: beneficiaryReferenceId,
    fileName: fileName,
  };
}
export {
  getBeneficiaries,
  getBeneficiariesSuccess,
  getBeneficiariesFailure,
  downloadCertificate,
};
