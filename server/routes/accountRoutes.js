const express = require("express");
const { signup, login } = require("../controller");

const router = express.Router();

console.log(signup);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
