const express = require("express");
const getUser = require("../controller/getUser");

const router = express.Router();

router.get("/user/current", getUser);

module.exports = router;