import axios, { AxiosError } from "axios";

const getCurrentUserLoader = async () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const axiosRequest = await axios
    .get(`${url}/current/user`, { withCredentials: true })
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
