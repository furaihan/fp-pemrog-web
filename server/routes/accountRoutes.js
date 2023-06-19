const express = require("express");
const { signup } = require("../controller");

const router = express.Router();

console.log(signup);
router.post("/signup", signup);

module.exports = router;