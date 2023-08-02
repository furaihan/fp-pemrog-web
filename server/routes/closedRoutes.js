const express = require("express");
const getUser = require("../controller/getUser");
const getProfile = require("../controller/getProfile");
const updateProfile = require("../controller/updateProfile");
const {
  getFiveRandomQuestionsByAnimalId,
  createQuiz,
  getQuizById,
  getLast3QuizzesByUserId,
} = require("../controller/quiz");

const router = express.Router();

router.get("/user/current", getUser);
router.get("/user/profile", getProfile);
router.put("/user/profile", updateProfile);
router.get("/quiz/:animalId", getFiveRandomQuestionsByAnimalId);
router.post("/quiz", createQuiz);
router.get("/quiz/result/:quizId", getQuizById);
router.get("/quiz/user/:userId", getLast3QuizzesByUserId);

module.exports = router;
