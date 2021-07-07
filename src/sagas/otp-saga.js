import { put, takeLatest, call } from "@redux-saga/core/effects";
import { OTP_REQUEST } from "../redux/otp/otp-types";
import { getOTPSuccess, getOTPFailure } from "../redux/otp/otp-actions";
import { fetchOTP } from "../apis/otp-api";

export function* getOTP() {
  yield takeLatest(OTP_REQUEST, getOPTSaga);
}

export function* getOPTSaga(action) {
  try {
    const response = yield call(fetchOTP, action.mobileNumber);
    yield put(getOTPSuccess(response));
  } catch (error) {
    yield put(getOTPFailure(error));
  }
}

const otpSagas = [getOTP];
export default otpSagas;
