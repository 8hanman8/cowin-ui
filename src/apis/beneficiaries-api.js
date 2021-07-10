import axios from "axios";
const API_HOST = "https://cdn-api.co-vin.in";

export function getBeneficiariesAPI() {
  return axios
    .get(`${API_HOST}/api/v2/appointment/beneficiaries`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
