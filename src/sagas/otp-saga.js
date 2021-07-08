import { put, takeLatest, call } from "@redux-saga/core/effects";
import { OTP_REQUEST, OTP_VERIFY_REQUEST } from "../redux/otp/otp-types";
import {
  getOTPSuccess,
  getOTPFailure,
  verifyOTPSuccess,
  verifyOTPFailure,
} from "../redux/otp/otp-actions";
import { getOTPAPI, verifyOTPAPI } from "../apis/otp-api";

export function* getOTP() {
  yield takeLatest(OTP_REQUEST, getOPTSaga);
}

export function* verifyOTP() {
  yield takeLatest(OTP_VERIFY_REQUEST, verifyOTPSaga);
}

export function* getOPTSaga(action) {
  try {
    const response = yield call(getOTPAPI, action.mobileNumber);
    yield put(getOTPSuccess(response));
  } catch (error) {
    yield put(getOTPFailure(error));
  }
}

export function* verifyOTPSaga(action) {
  try {
    const response = yield call(verifyOTPAPI, action.payload);
    yield put(verifyOTPSuccess(response.token));
  } catch (error) {
    yield put(verifyOTPFailure(error));
  }
}

const otpSagas = [getOTP, verifyOTP];
export default otpSagas;
