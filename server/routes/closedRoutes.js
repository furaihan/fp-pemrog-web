const express = require("express");
const getUser = require("../controller/getUser");
const getProfile = require("../controller/getProfile");

const router = express.Router();

router.get("/user/current", getUser);
router.get("/user/profile", getProfile);

module.exports = router;
