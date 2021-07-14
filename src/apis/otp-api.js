import axios from "axios";
const SECRET =
  "U2FsdGVkX18SK2GPBB+p/S5wmTvdHW093QwY0fChc865i0DSo17XC8uTm5mu4fBS/oLiz1z94Wgtrr/iiAz7kA==";

export function getOTPAPI(mobileNumber) {
  const request = {
    secret: SECRET,
    mobile: mobileNumber,
  };
  return axios
    .post(`${process.env.REACT_APP_API_HOST}/api/v2/auth/generateMobileOTP`, request)
    .then((response) => {
      return response.data.txnId;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function verifyOTPAPI(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_HOST}/api/v2/auth/validateMobileOtp`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
