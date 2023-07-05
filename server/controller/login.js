const { Sequelize, ValidationError } = require("sequelize");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { Account, User } = require("../models");
const joi = require("joi");
const env = process.env.NODE_ENV || "development";
const db = require("../config/database.js")[env];

const login = async (req, res) => {
  // Create a Sequelize instance using the database configuration
  const sequelize = new Sequelize(db);
  // Extract the email/username and password from the request body
  const { emailOrUsername, password } = req.body;

  // Define the validation schema using the joi library
  const validationSchema = joi.alternatives().try(
    joi.string().email().required().messages({
      "string.empty": "Email tidak boleh kosong", // Error message for empty email
      "string.email": "Email tidak valid", // Error message for invalid email format
      "any.required": "Email dibutuhkan", // Error message for missing email
    }),
    joi.string().alphanum().min(3).max(30).required().messages({
      "string.empty": "Username tidak boleh kosong", // Error message for empty username
      "string.alphanum": "Username hanya boleh mengandung huruf dan angka", // Error message for invalid username format
      "string.min": "Username setidaknya 3 karakter", // Error message for username length less than 3
      "string.max": "Username tidak boleh lebih dari 30 karakter", // Error message for username length more than 30
      "any.required": "Username dibutuhkan", // Error message for missing username
    })
  );

  try {
    // Validate the email/username using the validation schema
    const { error } = validationSchema.validate(emailOrUsername);
    if (error) {
      // Throw a ValidationError if the validation fails
      throw new ValidationError(error.message);
    }

    let account = null;
    let user = null;

    if (emailOrUsername.includes("@")) {
      // If the input contains '@', assume it's an email and find the account with the matching email
      // Since we have validate the email format with joi, we can safely assume that the input is a valid email
      account = await Account.findOne({
        where: { email: emailOrUsername },
        include: User,
      });
    } else {
      // Otherwise, assume it's a username and find the account with the matching username
      account = await Account.findOne({
        include: { model: User, where: { username: emailOrUsername } },
      });
    }

    if (!account) {
      // Throw a ValidationError if the account does not exist
      throw new ValidationError("Account does not exist");
    }
    // Get the associated user from the account
    user = account.User;

    // Add prefix and suffix salts to the password for additional security
    const saltedPassword =
      process.env.PREFIX_SALT + password + process.env.SUFFIX_SALT;
    // Compare the salted passwords with the encrypted password from the database
    const isPasswordCorrect = await bcrypt.compare(
      saltedPassword,
      account.password
    );

    if (!isPasswordCorrect) {
      // Throw a ValidationError if the password is incorrect
      throw new ValidationError("Password is incorrect");
    }

    const payload = {
      userId: user.user_id,
      username: user.username,
    };

    // Generate a JSON Web Token (JWT) using the payload and secret
    const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
      algorithm: "HS256",
    });


    const response = {
      code: 200,
      message: "Login successful",
      data: {
        user_id: user.user_id,
        account_id: account.account_id,
        username: user.username,
        email: account.email,
        token: token,
      },
    };

    // Return a successful login response
    return res.status(response.code).json(response);
  } catch (error) {
    console.log("Unknown Error:");
    console.log(error);

    error.code = error instanceof ValidationError ? 400 : 500;
    error.status =
      error instanceof ValidationError
        ? "Bad Request"
        : "Internal Server Error";

    const response = {
      code: error.code,
      message: error.message,
    };

    // Return an error response with appropriate status code and message
    return res.status(response.code).json(response);
  } finally {
    // Close the Sequelize connection, regardless of success or failure
    await sequelize.close();
  }
};

// Export the login function as a module
module.exports = login;
