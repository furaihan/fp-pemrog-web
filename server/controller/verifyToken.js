const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Get the token from the request's cookie
  const token = req.cookies.EF_TOKEN_ID;
  console.log(req.cookies);

  // Check if the token is not found
  if (!token) {
    // Create an error object
    const error = new Error("Access Denied!");
    error.code = "401";
    error.status = "Token not found, Access Denied!";

    // Create a response object with error details
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    // Log the response
    console.log(response);

    // Return a JSON response with status code 401 and the error message
    return res.status(401).json(response);
  }

  try {
    // Attempt to decrypt the token with the provided secret from the environment variable
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });

    // Add the userId from the decoded token to the request body
    req.body.userId = decoded.userId;

    // If the token is valid, move to the next middleware
    next();
  } catch (error) {
    console.log(error);

    // Handle the token verification error
    error.code = "401";
    error.status = "Invalid Token!";
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    // Return a JSON response with status code 401 and the error message
    return res.status(401).json(response);
  } finally {
    console.log("finally");
  }
};

module.exports = verifyToken;
