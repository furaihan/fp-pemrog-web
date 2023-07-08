const express = require("express");
const { signup, login } = require("../controller");
const { getAnimals, getRandomAnimalsFunFact } = require("../controller/animals");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/animals", getAnimals);
router.get("/animals/random/:count", getRandomAnimalsFunFact);

module.exports = router;
