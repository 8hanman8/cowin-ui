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

export function downloadCertificateAPI(beneficiaryReferenceId,fileName) {
  axios({
    url: `${process.env.REACT_APP_API_HOST}/api/v2/registration/certificate/download?beneficiary_reference_id=${beneficiaryReferenceId}`, //your url
    method: "GET",
    responseType: "blob", // important
  })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${fileName}.pdf`);
      document.body.appendChild(link);
      link.click();
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
