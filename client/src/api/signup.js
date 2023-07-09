import { axiosInstance } from "./baseApi";
import { redirect } from "react-router-dom";

const signupAction = async ({ request }) => {
  const data = await request.formData();
  try {
    const response = await axiosInstance.post(
      `/signup`,
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
    );
    console.log("Response:");
    console.log(response);
    localStorage.setItem("token", response.data.data.token);
    localStorage.setItem("loginTime", Date.now());
    return redirect("/");
  } catch (error) {
    console.error(error);
    if (error.response?.data) {
      return error.response.data.message;
    }
    return error.message;
  }
};

export default signupAction;
