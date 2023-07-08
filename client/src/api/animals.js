import { AxiosError } from "axios";
import { axiosInstance } from "./baseApi";

export const getAnimalsLoader = async () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const axiosRequest = await axiosInstance
    .get(`${url}/animals`, {
      withCredentials: true,
    })
    .then((response) => response)
    .catch((error) => error);
  let data = {};
  if (axiosRequest instanceof AxiosError) {
    data = {
      animals: [],
    };
    return data;
  }
  data = {
    animals: axiosRequest.data.animals,
  };
  return data;
};
