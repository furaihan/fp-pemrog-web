import { axiosInstance } from "./baseApi";

const getProfileLoader = async () => {
  if (localStorage.getItem("token") === null) {
    console.log("No token found");
    return {
      username: null,
      data: {
        firstName: null,
        lastName: null,
        email: null,
        bio: null,
        address: null,
        phone: null,
      },
    };
  }
  try {
    const response = await axiosInstance.get(`/user/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    });
    console.log("Response:");
    console.log(response);
    const data = {
      username: response.data.user.username,
      data: {
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName,
        email: response.data.user.email,
        bio: response.data.user.bio,
        address: response.data.user.address,
        phone: response.data.user.phone,
      },
    };
    console.log("Data:");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    const data = {
      username: null,
      data: {
        firstName: null,
        lastName: null,
        email: null,
        bio: null,
        address: null,
        phone: null,
      },
    };
    return data;
  }
};

export default getProfileLoader;
