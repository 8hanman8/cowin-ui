import { put, takeLatest, call } from "@redux-saga/core/effects";
import { GET_BENEFICIARIES } from "../redux/beneficiaries/beneficiaries-types";
import { getBeneficiariesAPI } from "../apis/beneficiaries-api";
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

const beneficiariesSagas = [getBeneficiaries];
export default beneficiariesSagas;
