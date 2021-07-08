import {
  OTP_REQUEST,
  OTP_REQUEST_SUCCESS,
  OTP_REQUEST_FAILURE,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_FAILURE,
} from "../otp/otp-types";

const defaultState = {
  isFetching: false,
  txnId: "",
  error: "",
  accessToken: "",
};
const otpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      return {
        ...state,
        isFetching: true,
        txnId: "",
        error: "",
      };
    case OTP_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        txnId: action.txnId,
        error: "",
      };
    case OTP_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: true,
        txnId: "",
        error: action.error,
      };
    case OTP_VERIFY_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case OTP_VERIFY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        accessToken: action.accessToken,
        error: "",
      };
    case OTP_VERIFY_FAILURE:
      return {
        ...state,
        isFetching: false,
        accessToken: '',
        error: action.error,
      };
    default:
      return state;
  }
};

export default otpReducer;
