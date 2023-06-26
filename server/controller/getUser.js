const { User } = require("../models");

const getUser = async (req, res) => {
  const user = await User.findOne({
    where: { user_id: req.body.userId },
  });
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
    data: {
      id: user.user_id,
      username: user.username,
      email: null,
    },
  };
  console.log(response);
  return res.status(200).json(response);
};

module.exports = getUser;
