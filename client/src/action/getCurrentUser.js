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
  const data = {
    isUserLoggedIn: !(axiosRequest instanceof AxiosError),
    user: {
      email: null,
      username: null,
    },
  };
  console.log("Data:");
  return data;
};

export default getCurrentUserLoader;
