const { User, Account } = require("../models");

const getUser = async (req, res) => {
  console.log("Reqest user received!");
  const account = await Account.findOne({
    include: { model: User, where: { user_id: req.body.userId } },
  });
  const user = account.User;
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
      email: account.email,
    },
  };
  console.log(response);
  return res.status(200).json(response);
};

module.exports = getUser;
