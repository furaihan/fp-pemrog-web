import { AxiosError } from "axios";
import { axiosInstance } from "./baseApi";

export const getAnimalsLoader = async () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const axiosRequest = await axiosInstance
    .get(`${url}/animals`, {})
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

export const getAnimalLoader = async (params) => {
  const { id } = params;
  const url = import.meta.env.VITE_BACKEND_URL;
  const axiosRequest = await axiosInstance
    .get(`${url}/animals/${id}`, {})
    .then((response) => response)
    .catch((error) => error);
  let data = {};
  if (axiosRequest instanceof AxiosError) {
    data = {
      animal: {},
    };
    return data;
  }
  data = {
    animal: axiosRequest.data.animal,
  };
  return data;
};

export const getRandomAnimalsFunFactLoader = async (params) => {
  console.log("getRandomAnimalsFunFactLoader");
  console.log(params);
  const { count } = params;
  const url = import.meta.env.VITE_BACKEND_URL;
  const axiosRequest = await axiosInstance
    .get(`${url}/animals/random/${count}`, {})
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
