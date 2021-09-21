import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.request.use(
  (request) => {
    console.log("interceptors.request", request);

    request.headers["Content-Type"] = "application/json;charset=UTF-8";

    if (!request.headers.Authorization) {
      const session = JSON.parse(localStorage.getItem("session"));

      if (session && session.token) {
        request.headers.Authorization = `Bearer ${session.token}`;
      }
    }

    return request;
  },
  (error) => {
    console.log("interceptors.error", error.response);

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("interceptors.response", response);

    return response;
  },
  (error) => {
    console.log("interceptors.error", error.response);

    if (error.response.status === 401) {
      const { confirm } = require("../components/confirm");

      confirm(
        "Session expired",
        "Your session has expired. You must login again.",
        { enableCancel: false }
      ).then(() => {
        window.location.replace("/admin/login");
      });
    }

    return Promise.reject(error);
  }
);

export default axios;
