import {
  OTP_REQUEST,
  OTP_REQUEST_SUCCESS,
  OTP_REQUEST_FAILURE,
} from "../otp/otp-types";

const defaultState = {
  isFetching: false,
  txnId: "",
  error: "",
};
const otpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      return {
        isFetching: true,
        txnId: "",
        error: "",
      };
    case OTP_REQUEST_SUCCESS:
      return {
        isFetching: false,
        txnId: action.txnId,
        error: "",
      };
    case OTP_REQUEST_FAILURE:
      return {
        isFetching: true,
        txnId: "",
        error: action.error,
      };
    default:
      return state;
  }
};

export default otpReducer;
