const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.EF_TOKEN_ID;
  console.log(req.cookies);
  // check if token is not found
  if (!token) {
    const error = new Error("Access Denied!");
    error.code = "401";
    error.status = "Token not found, Access Denied!";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    // return code 401 and the error message
    console.log(response);
    return res.status(401).json(response);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });
    console.log("Decoded:");
    console.log(decoded);
    console.log("userId: ", decoded.userId);
    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    error.code = "401";
    error.status = "Invalid Token!";
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    console.log(response);
    return res.status(401).json(response);
  } finally {
    console.log("finally");
  }
};

module.exports = verifyToken;
