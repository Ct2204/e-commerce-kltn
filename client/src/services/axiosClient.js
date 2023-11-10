import axios from "axios";
import queryString from "query-string";

// Set up default config for http requests here
// Please have a look at here https://github.com/axios/axios#request- config for the full list of configs
const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) => queryString.stringify(params),
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers["Auth-Token"] = accessToken;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data?.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return response;
  },
  async (res) => {
    const response = res?.response || res;
    const { status, data } = response;

    const responseError = {
      ...data,
      status,
    };
    // Handle errors
    throw responseError;
  }
);

export default axiosClient;
