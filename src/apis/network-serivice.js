import axios from "axios";
import { logout } from "../redux/otp/otp-actions";

const interceptors = {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log("Request is sending");
        const accessToken = store.getState().otp.accessToken;
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
      (error) => {
        // Do something with request error
        console.log("Request is failed");
        return Promise.reject(error);
      }
    );
    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => {
        console.log("Response received");
        return response;
      },
      (error) => {
        console.log("Response received with an error");
        if (error.response && error.response.status === 401) {
          // store.dispatch({ type: "LOGOUT_USER" });
          store.dispatch(logout());
        }
        return Promise.reject(error);
      }
    );
  },
};

export default interceptors;
