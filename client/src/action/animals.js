import axios, { AxiosError } from "axios";

const getAnimalsLoader = async () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const axiosRequest = await axios
    .get(`${url}/animals`, {
      withCredentials: true,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
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

export default getAnimalsLoader;
