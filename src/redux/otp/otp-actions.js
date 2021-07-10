import {
  OTP_REQUEST,
  OTP_REQUEST_SUCCESS,
  OTP_REQUEST_FAILURE,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from "./otp-types";

function getOTP(mobileNumber) {
  return {
    type: OTP_REQUEST,
    mobileNumber: mobileNumber,
  };
}

function getOTPSuccess(payload) {
  return {
    type: OTP_REQUEST_SUCCESS,
    txnId: payload,
  };
}

function getOTPFailure(payload) {
  return {
    type: OTP_REQUEST_FAILURE,
    error: payload,
  };
}

function verifyOTP(payload) {
  return {
    type: OTP_VERIFY_REQUEST,
    payload: payload,
  };
}

function verifyOTPSuccess(accessToken) {
  return {
    type: OTP_VERIFY_SUCCESS,
    accessToken: accessToken,
  };
}

function verifyOTPFailure(error) {
  return {
    type: OTP_VERIFY_FAILURE,
    error: error,
  };
}

function logout() {
  return {
    type: LOGOUT_USER,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}

function logoutFailure(error) {
  return {
    type: LOGOUT_USER_FAILURE,
    error: error,
  };
}

export {
  getOTP,
  getOTPSuccess,
  getOTPFailure,
  verifyOTP,
  verifyOTPSuccess,
  verifyOTPFailure,
  logout,
  logoutSuccess,
  logoutFailure,
};
