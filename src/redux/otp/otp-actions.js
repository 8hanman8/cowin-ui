import {
  OTP_REQUEST,
  OTP_REQUEST_SUCCESS,
  OTP_REQUEST_FAILURE,
} from "./otp-types";

export function getOTP(mobileNumber) {
  return {
    type: OTP_REQUEST,
    mobileNumber: mobileNumber,
  };
}

export function getOTPSuccess(payload) {
  return {
    type: OTP_REQUEST_SUCCESS,
    txnId: payload,
  };
}

export function getOTPFailure(payload) {
  return {
    type: OTP_REQUEST_FAILURE,
    error: payload,
  };
}
