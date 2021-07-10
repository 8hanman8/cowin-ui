import { put, takeLatest, call } from "@redux-saga/core/effects";
import {
  LOGOUT_USER,
  OTP_REQUEST,
  OTP_VERIFY_REQUEST,
} from "../redux/otp/otp-types";
import {
  getOTPSuccess,
  getOTPFailure,
  verifyOTPSuccess,
  verifyOTPFailure,
  logoutSuccess,
  logoutFailure,
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
    yield put(getOTPFailure(error.data.error));
  }
}

export function* verifyOTPSaga(action) {
  try {
    const response = yield call(verifyOTPAPI, action.payload);
    yield put(verifyOTPSuccess(response.token));
    // const response = {
    //   token:
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJiN2Q2MTNjOC00OTY2LTQ4MTItYTYzYi0yYWY0ODUwNjI3ZTgiLCJ1c2VyX2lkIjoiYjdkNjEzYzgtNDk2Ni00ODEyLWE2M2ItMmFmNDg1MDYyN2U4IiwidXNlcl90eXBlIjoiQkVORUZJQ0lBUlkiLCJtb2JpbGVfbnVtYmVyIjo4MzY3NTg1MDIyLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjMyNTk5NzU4OTg0MTUwLCJzZWNyZXRfa2V5IjoiYjVjYWIxNjctNzk3Ny00ZGYxLTgwMjctYTYzYWExNDRmMDRlIiwic291cmNlIjoiY293aW4iLCJ1YSI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MS4wLjQ0NzIuMTI0IFNhZmFyaS81MzcuMzYiLCJkYXRlX21vZGlmaWVkIjoiMjAyMS0wNy0xMFQxNTozODo1MS45NDdaIiwiaWF0IjoxNjI1OTMxNTMxLCJleHAiOjE2MjU5MzI0MzF9.A_fLFasAmIMAjkY9oda0wBoNxU0yTC3MnxZ-G646KBI",
    //   isNewAccount: "N",
    // };
    // yield put(verifyOTPSuccess(response.token));
  } catch (error) {
    yield put(verifyOTPFailure(error));
  }
}

export function* logoutUser() {
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}

export function* logoutUserSaga() {
  try {
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

const otpSagas = [getOTP, verifyOTP, logoutUser];
export default otpSagas;
