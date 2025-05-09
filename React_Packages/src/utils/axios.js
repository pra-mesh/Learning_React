import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    access_token: localStorage.getItem("access_token"),
    tenant: "OX001",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("interceptors");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
