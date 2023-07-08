import { axiosInstance } from './baseApi';

const getCurrentUserLoader = async () => {
  if (localStorage.getItem("token") === null) {
    console.log("No token found");
    return {
      isUserLoggedIn: false,
      user: {
        email: null,
        username: null,
      },
    };
  }
  try {
    const response = await axiosInstance.get(`/user/current`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    });
    console.log("Response:");
    console.log(response);
    const data = {
      isUserLoggedIn: true,
      user: {
        email: response.data.user.email,
        username: response.data.user.username,
      },
    };
    console.log("Data:");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    const data = {
      isUserLoggedIn: false,
      user: {
        email: null,
        username: null,
      },
    };
    return data;
  }
};

export default getCurrentUserLoader;
