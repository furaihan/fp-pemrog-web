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
    origin: "*",
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
