import axios, { AxiosError } from "axios";
import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
  const data = await request.formData();
  const url = import.meta.env.VITE_BACKEND_URL;
  console.log(url);
  const axiosRequest = await axios
    .post(
      `${url}/login`,
      {
        emailOrUsername: data.get("emailOrUsername"),
        password: data.get("password"),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  console.log("Response:");
  console.log(axiosRequest);
  if (axiosRequest instanceof AxiosError) {
    if (axiosRequest.response?.data) return axiosRequest.response.data.message;
    return axiosRequest.message;
  }
  return redirect("/");
};

export default loginAction;
