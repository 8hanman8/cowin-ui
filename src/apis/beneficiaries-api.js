import axios from "axios";

export function getBeneficiariesAPI() {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}/api/v2/appointment/beneficiaries`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
