import axios from "axios";

const isDevelopment = import.meta.env.DEV;
const beUrl = import.meta.env.VITE_BACKEND_URL;
const feUrl = import.meta.env.VITE_FRONTEND_URL;

const headers = isDevelopment
  ? { "Content-Type": "application/json" }
  : {
      "Access-Control-Allow-Origin": feUrl,
      "Content-Type": "application/json",
    };

export const axiosInstance = axios.create({
  baseURL: beUrl,
  headers: headers,
  withCredentials: false,
});
