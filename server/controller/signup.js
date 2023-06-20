const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Account, User } = require("../models");
const {
  Sequelize,
  Transaction,
  ValidationError,
  TimeoutError,
} = require("sequelize");
const env = process.env.NODE_ENV || "development";
const db = require("../config/database.js")[env];

const signup = async (req, res) => {
  console.log("Signup");
  const { email, password, confirmPassword, username } = req.body;
  console.log(req.body);
  const sequelize = new Sequelize(db);
  try {
    // Check if the username already exists
    if (await User.findOne({ where: { username: username } })) {
      throw new ValidationError("Username already exists");
    }
    // Check if the email already exists
    if (await Account.findOne({ where: { email: email } })) {
      throw new ValidationError("Email already exists");
    }
    console.log("Email and username are available");
    // Validate the singup input
    const inputAccount = {
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };
    const { error: accError } = Account.validate(inputAccount);
    const inputUser = {
      username: username,
    };
    const { error: userError } = User.validate(inputUser);
    if (accError || userError) {
      throw new ValidationError((accError || userError).details[0].message);
    }
    // Salt the password
    const saltedPassword =
      process.env.PREFIX_SALT + password + process.env.SUFFIX_SALT;
    // Hash the password
    const hashedPassword = await bcrypt.hash(saltedPassword, 10);
    const account = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Account.create(
          {
            email: email,
            password: hashedPassword,
            User: {
              username: username,
            },
          },
          { transaction: t, include: [User] }
        );
      }
    );
    const user = account.User;
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
        algorithm: "HS256",
      }
    );
    res.cookie("EF_TOKEN_ID", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    const response = {
      code: 201,
      status: "Created",
      message: "Account created",
      data: {
        user_id: user.user_id,
        account_id: account.account_id,
        username: user.username,
        email: account.email,
      },
    };
    console.log(response);
    return res.status(response.code).json(response);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.code = 400;
      error.status = "Bad request";
    } else if (error instanceof TimeoutError) {
      error.code = 500;
      error.status = "Request Timeout";
    } else {
      error.code = 500;
      error.status = "Internal Server Error";
    }
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    console.log(response);
    return res.status(response.code).json(response);
  }
  finally {
    await sequelize.close();
  }
};

module.exports = signup;
