const { User } = require("../models");

const updateProfile = async (req, res) => {
  console.log("Update profile received!");

  const { firstName, lastName, email, phone, address, bio, userId } = req.body;

  try {
    const result = await User.update(
      {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        address: address,
        bio: bio,
      },
      {
        where: {
          user_id: userId,
        },
      }
    );

    console.log(result);

    const response = {
      code: 200,
      status: "OK",
      message: "User updated!",
    };

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);

    const response = {
      code: error.statusCode || 500,
      status: error.status || "Internal Server Error",
      message: error.message || "Something went wrong!",
    };

    return res.status(response.code).json(response);
  }
};

module.exports = updateProfile;
