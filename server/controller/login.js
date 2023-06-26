const { Sequelize, ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { Account, User } = require("../models");
const joi = require("joi");
const env = process.env.NODE_ENV || "development";
const db = require("../config/database.js")[env];

const login = async (req, res) => {
  const sequelize = new Sequelize(db);
  const { emailOrUsername, password } = req.body;

  const validationSchema = joi.alternatives().try(
    joi.string().email().required().messages({
      "string.empty": "Email tidak boleh kosong",
      "string.email": "Email tidak valid",
      "any.required": "Email dibutuhkan",
    }),
    joi.string().alphanum().min(3).max(30).required().messages({
      "string.empty": "Username tidak boleh kosong",
      "string.alphanum": "Username hanya boleh mengandung huruf dan angka",
      "string.min": "Username setidaknya 3 karakter",
      "string.max": "Username tidak boleh lebih dari 30 karakter",
      "any.required": "Username dibutuhkan",
    })
  );

  try {
    const { error } = validationSchema.validate(emailOrUsername);
    if (error) {
      throw new ValidationError(error.message);
    }

    let account = null;
    let user = null;

    if (emailOrUsername.includes("@")) {
      account = await Account.findOne({
        where: { email: emailOrUsername },
        include: User,
      });
    } else {
      account = await Account.findOne({
        include: { model: User, where: { username: emailOrUsername } },
      });
    }

    if (!account) {
      throw new ValidationError("Account does not exist");
    }

    user = account.User;

    const saltedPassword =
      process.env.PREFIX_SALT + password + process.env.SUFFIX_SALT;
    const isPasswordCorrect = await bcrypt.compare(
      saltedPassword,
      account.password
    );

    if (!isPasswordCorrect) {
      throw new ValidationError("Password is incorrect");
    }

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
    console.log("Unknown Error:");
    console.log(error);
    error.code = error instanceof ValidationError ? 400 : 500;
    error.status = error instanceof ValidationError ? "Bad Request" : "Internal Server Error";

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
