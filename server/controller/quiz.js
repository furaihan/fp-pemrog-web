const { Question, Quiz, Animal, QuizDetail } = require("../models");
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const db = require("../config/database.js")[env];
const sequelize = new Sequelize(db);

const getFiveRandomQuestionsByAnimalId = async (req, res) => {
  const { animalId } = req.params;
  try {
    const animal = await Animal.findOne({
      where: { animal_id: animalId },
      attributes: ["animal_id", "animal_name"],
      include: [
        {
          model: Question,
          attributes: [
            "question_id",
            "question",
            "option_1",
            "option_2",
            "option_3",
            "correct_answer",
          ],
          limit: 5,
          order: sequelize.random(),
        },
      ],
    });
    const questions = animal.Questions.map((question) => {
      return {
        question_id: question.question_id,
        question: question.question,
        option_1: question.option_1,
        option_2: question.option_2,
        option_3: question.option_3,
        correct_answer: question.correct_answer,
      };
    });

    const response = {
      status: "success",
      code: 200,
      questions,
    };

    return res.json(response);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    const response = {
      status: "error",
      code: 500,
      message: "Internal server error",
    };
    return res.status(500).json(response);
  }
};

const createQuiz = async (req, res) => {
  const { animalId, userId, score, details } = req.body;
  try {
    const quiz = await Quiz.create({
      animal_id: animalId,
      user_id: userId,
      score: score,
    });
    const response = {
      status: "success",
      code: 200,
      quiz_id: quiz.quiz_id,
    };
    const quizDetails = details.map((detail) => {
      return {
        quiz_id: quiz.quiz_id,
        question_id: detail.question_id,
        selected_option: detail.selected_option,
        response_time: detail.response_time,
        is_correct: detail.is_correct,
      };
    });
    await QuizDetail.bulkCreate(quizDetails);
    return res.json(response);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    const response = {
      status: "error",
      code: 500,
      message: "Internal server error",
    };
    return res.status(500).json(response);
  }
};

const getQuizById = async (req, res) => {
  const { quizId } = req.params;
  try {
    const quiz = await Quiz.findOne({
      where: { quiz_id: quizId },
      attributes: ["quiz_id", "score", "time"],
      include: [
        {
          model: QuizDetail,
          attributes: [
            "detail_id",
            "selected_option",
            "response_time",
            "is_correct",
          ],
          include: [
            {
              model: Question,
              attributes: ["question"],
            },
          ],
        },
      ],
    });
    const response = {
      status: "success",
      code: 200,
      quiz,
    };
    return res.json(response);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    const response = {
      status: "error",
      code: 500,
      message: "Internal server error",
    };
    return res.status(500).json(response);
  }
};

module.exports = { getFiveRandomQuestionsByAnimalId, createQuiz, getQuizById };
