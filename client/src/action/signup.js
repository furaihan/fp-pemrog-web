import axios, { AxiosError } from "axios";
import { redirect } from "react-router-dom";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const signupAction = async ({ request }) => {
  const data = await request.formData();
  const axiosRequest = await axios
    .post(
      "http://localhost:3000/signup",
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
    return axiosRequest.response.data.message;
  }
  await delay(2000);
  return redirect("/");
};
export default signupAction;
