const { User } = require("../models");

const getProfile = async (req, res) => {
  console.log("Request profile received!");
  const user = await User.findOne({ where: { user_id: req.body.userId } });
  if (!user) {
    const error = new Error("User not found!");
    error.code = "404";
    error.status = "User not found!";
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    return res.status(404).json(response);
  }
  const response = {
    code: "200",
    status: "OK",
    message: "User found!",
    user: {
      id: user.user_id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      bio: user.bio,
      address: user.address,
      phone: user.phone,
    },
  };
  console.log(response);
  return res.status(200).json(response);
};

module.exports = getProfile;
