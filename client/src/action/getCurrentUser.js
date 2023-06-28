import axios, { AxiosError } from "axios";

const getCurrentUserLoader = async () => {
  const axiosRequest = await axios
    .get("http://localhost:3000/user/current", { withCredentials: true })
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
