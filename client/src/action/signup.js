import axios from "axios";
import { redirect } from "react-router-dom";

const signupAction = async ({ request }) => {
  const data = await request.formData();
  axios
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
      console.log("signupAction response:");
      console.log(response);
    })
    .catch(function (error) {
      console.log("signupAction error:");
      console.log(error.response.data.message);
      return { error: error.response.data.message };
    });
  return redirect("/signup");
};
export default signupAction;
