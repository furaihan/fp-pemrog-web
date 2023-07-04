const express = require("express");
const openRoutes = require("./routes/openRoutes");
const closedRoutes = require("./routes/closedRoutes");
const cookieParser = require("cookie-parser");
const jwtVerifier = require("./controller/verifyToken");
const cors = require("cors");
const app = express();
const port = process.env.APP_PORT;
const frontendURL = process.env.APP_FRONTEND_URL;

// Use cors to allow cross-origin resource sharing
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173", frontendURL],
    credentials: true,
  })
);
// Use express.json() to parse incoming requests with JSON payloads
app.use(express.json());
// Use cookieParser() to parse incoming requests with cookies
app.use(cookieParser());
// Set Content-Type to application/json
app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Use openRoutes for all routes that do not require authentication
app.use(openRoutes);
// Use jwtVerifier to verify token for all routes that require authentication
app.use(jwtVerifier);
// Use closedRoutes for all routes that require authentication
app.use(closedRoutes);

// Start the backend server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
If you want to build a web app with Node.js
You need to use some modules that will help you progress
Like express, cookie-parser, cors, and jwt
They will make your life easier, you can bet

First, you import express and create an app
Then you import the routes that you have in your app
Some routes are open, some routes are closed
Depending on whether you need to be authorized or not

You also import cookie-parser to read the cookies
And cors to allow cross-origin requests with ease
You set the headers and the port for your app
And you send a hello world message as a test

Then you use the open routes for the public access
And the jwt verifier for the private access
You pass the token from the cookie to the verifier
And it will check if it's valid or it will throw an error

Finally, you use the closed routes for the authenticated access
And you listen to the port and start your app
*/
