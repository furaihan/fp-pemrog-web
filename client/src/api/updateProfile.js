import { axiosInstance } from "./baseApi";
import { redirect } from "react-router-dom";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const updateProfileAction = async ({ request }) => {
  const data = await request.formData();
  try {
    const response = await axiosInstance.put(
      `/user/profile`,
      {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        phone: data.get("phone"),
        address: data.get("address"),
        bio: data.get("bio"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("Update Profile Response:");
    console.log(response);
    await delay(1000);
    return redirect("/profile");
  } catch (error) {
    console.error(error);
    if (error.response?.data) {
      return error.response.data.message;
    }
    return error.message;
  }
};

export default updateProfileAction;
