import axios, { AxiosError } from "axios";
import { redirect } from "react-router-dom";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const updateProfileAction = async ({ request }) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const data = await request.formData();
  const axiosRequest = await axios
    .put(
      `${url}/user/profile`,
      {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        phone: data.get("phone"),
        address: data.get("address"),
        bio: data.get("bio"),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  await delay(1000);
  return redirect("/profile");
};

export default updateProfileAction;
