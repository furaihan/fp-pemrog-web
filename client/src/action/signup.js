import axios, { AxiosError } from "axios";
import { redirect } from "react-router-dom";

const signupAction = async ({ request }) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const data = await request.formData();
  const axiosRequest = await axios
    .post(
      `${url}/signup`,
      {
        email: data.get("email"),
        username: data.get("username"),
        password: data.get("password"),
        confirmPassword: data.get("confirmPassword"),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    )
    .then(function (response) {
      localStorage.setItem("token", response.data.data.token);
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
export default signupAction;
