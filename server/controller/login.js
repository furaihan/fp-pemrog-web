const { Sequelize, ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { Account, User } = require("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/database.js")[env];

const login = async (req, res) => {
  const sequelize = new Sequelize(db);
  const { email, password } = req.body;
  try {
    const account = await Account.findOne({ where: { email: email } });
    if (!account) {
      throw new ValidationError("Account does not exist");
    }
    const inputAccount = {
      email: email,
      password: password,
    };
    const { error: accError } = Account.validate(inputAccount);
    if (accError) {
      throw new ValidationError(accError.details[0].message);
    }
    const saltedPassword =
      process.env.PREFIX_SALT + password + process.env.SUFFIX_SALT;
    const isPasswordCorrect = await bcrypt.compare(
      saltedPassword,
      account.password
    );
    if (!isPasswordCorrect) {
      throw new ValidationError("Password is incorrect");
    }
    const user = await User.findOne({
      where: { account_id: account.account_id },
    });
    const payload = {
      userId: user.user_id,
      username: user.username,
    };
    console.log(payload);
    const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    res.cookie("EF_TOKEN_ID", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    const response = {
      code: 200,
      message: "Login successful",
    };
    return res.status(response.code).json(response);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.code = 400;
      error.status = "Bad Request";
    } else {
      console.log("Unknown Error:");
      console.log(error);
      error.code = 500;
      error.status = "Internal Server Error";
    }
    const response = {
      code: error.code,
      message: error.message,
    };
    return res.status(response.code).json(response);
  } finally {
    await sequelize.close();
  }
};

module.exports = login;
