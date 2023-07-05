import axios, { AxiosError } from "axios";

const getProfileLoader = async () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  if (localStorage.getItem("token") === null) {
    console.log("No token found");
    return {
      username: null,
      data: {
        firstName: null,
        lastName: null,
        email: null,
        bio: null,
        address: null,
        phone: null,
      },
    };
  }
  const axiosRequest = await axios
    .get(`${url}/user/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  console.log("Response:");
  console.log(axiosRequest);
  let data = {};
  if (axiosRequest instanceof AxiosError) {
    data = {
      username: null,
      data: {
        firstName: null,
        lastName: null,
        email: null,
        bio: null,
        address: null,
        phone: null,
      },
    };
    return data;
  }
  data = {
    username: axiosRequest.data.user.username,
    data: {
      firstName: axiosRequest.data.user.firstName,
      lastName: axiosRequest.data.user.lastName,
      email: axiosRequest.data.user.email,
      bio: axiosRequest.data.user.bio,
      address: axiosRequest.data.user.address,
      phone: axiosRequest.data.user.phone,
    },
  };
  console.log("Data:");
  console.log(data);
  return data;
};

export default getProfileLoader;
