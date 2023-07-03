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

/*
A token is a secret that you need to access
The data that you want from the server's address
But how do you verify that the token is legit?
You use a function that I'm about to spit

First, you get the token from the cookie in the request
Then you check if it exists or else you must reject
You create an error object with a message and a code
And you send it back as JSON with a status that shows

But if the token is there, you try to decrypt it
With the secret that you have in your environment
You add the userId from the token to the body of the request
And then you call the next middleware without any stress

But what if something goes wrong and the token is not valid?
You catch the error and you handle it with logic
You create another error object with a different message and code
And you send it back as JSON with a status that shows

Finally, you log a message that says "finally"
And you export the function so others can use it wisely
That's how you verify a token with a function in Node.js

*/
