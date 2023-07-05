const express = require("express");
const getUser = require("../controller/getUser");
const getProfile = require("../controller/getProfile");
const updateProfile = require("../controller/updateProfile");

const router = express.Router();

router.get("/user/current", getUser);
router.get("/user/profile", getProfile);
router.put("/user/profile", updateProfile);

module.exports = router;
