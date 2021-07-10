import {
  OTP_REQUEST,
  OTP_REQUEST_SUCCESS,
  OTP_REQUEST_FAILURE,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_FAILURE,
} from "../otp/otp-types";

const defaultState = {
  loading: false,
  txnId: "",
  error: "",
  accessToken: "",
  isLoggedIn: false,
};
const otpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      return {
        ...state,
        loading: true,
        txnId: "",
        error: "",
      };
    case OTP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        txnId: action.txnId,
        error: "",
      };
    case OTP_REQUEST_FAILURE:
      return {
        ...state,
        loading: true,
        txnId: "",
        error: action.error,
      };
    case OTP_VERIFY_REQUEST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };
    case OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.accessToken,
        error: "",
        isLoggedIn: true,
      };
    case OTP_VERIFY_FAILURE:
      return {
        ...state,
        loading: false,
        accessToken: "",
        error: action.error,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default otpReducer;
