import axios, { AxiosError } from "axios";

const getCurrentUserLoader = async () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  if (localStorage.getItem("token") === null) {
    return {
      isUserLoggedIn: false,
      user: {
        email: null,
        username: null,
      },
    };
  }
  const axiosRequest = await axios
    .get(`${url}/current/user`, {
      headers: {
        "Content-Type": "application/json",
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
      isUserLoggedIn: false,
      user: {
        email: null,
        username: null,
      },
    };
    return data;
  }
  data = {
    isUserLoggedIn: true,
    user: {
      email: axiosRequest.data.user.email,
      username: axiosRequest.data.user.username,
    },
  };
  console.log("Data:");
  console.log(data);
  return data;
};

export default getCurrentUserLoader;
