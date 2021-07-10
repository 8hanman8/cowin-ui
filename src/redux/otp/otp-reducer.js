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
} from "../otp/otp-types";

const sessionAccessToken = sessionStorage.getItem("accessToken");
const accessToken = sessionAccessToken !== "null" ? sessionAccessToken : null;
const isLoggedIn = !!accessToken;

const defaultState = {
  loading: false,
  txnId: "",
  error: "",
  isOTPSent: false,
  accessToken: accessToken,
  isLoggedIn: isLoggedIn,
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
        isOTPSent: true,
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
        accessToken: null,
        error: action.error,
        isLoggedIn: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        accessToken: null,
        isLoggedIn: false,
        error: "",
        loading: false,
        txnId: "",
        isOTPSent : false
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default otpReducer;
