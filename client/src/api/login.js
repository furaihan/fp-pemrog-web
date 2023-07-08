import { axiosInstance } from "./baseApi";
import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
  const data = await request.formData();
  try {
    const response = await axiosInstance.post(
      `/login`,
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

export default loginAction;
