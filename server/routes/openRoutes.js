const express = require("express");
const { signup, login } = require("../controller");
const { getAnimals } = require("../controller/animals");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/animals", getAnimals);

module.exports = router;
