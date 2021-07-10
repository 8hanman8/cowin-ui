import axios from "axios";

const interceptors = {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log("Request is sending");
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
        if (error.response.status === 401) {
          store.dispatch({ type: "LOGOUT_USER" });
        }
        return Promise.reject(error.response);
      }
    );
  },
};

export default interceptors;
