import { put, takeLatest, call } from "@redux-saga/core/effects";
import {
  GET_BENEFICIARIES,
  DOWNLOAD_CERTIFICATE,
} from "../redux/beneficiaries/beneficiaries-types";
import {
  getBeneficiariesAPI,
  downloadCertificateAPI,
} from "../apis/beneficiaries-api";
import {
  getBeneficiariesSuccess,
  getBeneficiariesFailure,
} from "../redux/beneficiaries/beneficiaries-actions";

export function* getBeneficiaries() {
  yield takeLatest(GET_BENEFICIARIES, getBeneficiariesSaga);
}

export function* getBeneficiariesSaga() {
  try {
    const response = yield call(getBeneficiariesAPI);
    yield put(getBeneficiariesSuccess(response.beneficiaries));
  } catch (error) {
    yield put(getBeneficiariesFailure(error));
  }
}

export function* downloadCertificate() {
  yield takeLatest(DOWNLOAD_CERTIFICATE, downloadCertificateSaga);
}

export function* downloadCertificateSaga(action) {
  try {
    yield call(downloadCertificateAPI(action.beneficiaryReferenceId,action.fileName));
  } catch (error) {}
}
const beneficiariesSagas = [getBeneficiaries, downloadCertificate];
export default beneficiariesSagas;
