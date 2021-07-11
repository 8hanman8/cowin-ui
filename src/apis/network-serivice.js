import axios from "axios";
import { logout } from "../redux/otp/otp-actions";
import {
  spinnerLoadingStart,
  spinnerLoadingStop,
} from "../redux/loading-spinner";

const interceptors = {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log("Request is sending");
        store.dispatch(spinnerLoadingStart());
        const accessToken = store.getState().otp.accessToken;
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
      (error) => {
        // Do something with request error
        console.log("Request is failed");
        store.dispatch(spinnerLoadingStop());
        return Promise.reject(error);
      }
    );
    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => {
        console.log("Response received");
        store.dispatch(spinnerLoadingStop());
        return response;
      },
      (error) => {
        console.log("Response received with an error");
        store.dispatch(spinnerLoadingStop());
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
