import { AxiosError } from "axios";
import { axiosInstance } from "./baseApi";

export const getQuizzesLoader = async ({ params }) => {
  console.log("getQuizzesLoader");
  const { animalId } = params;
  const axiosRequest = await axiosInstance
    .get(`/quiz/${animalId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
  let data = {};
  if (axiosRequest instanceof AxiosError) {
    console.log(axiosRequest);
    data = {
      status: "error",
      quizzes: [],
    };
    return data;
  }
  data = {
    quizzes: axiosRequest.data.questions,
  };
  return data;
};

export const createQuizLoader = async (params) => {
  console.log("createQuizLoader");
  console.log(params);
  const { animalId, score, details } = params;
  const axiosRequest = await axiosInstance
    .post(
      "/quiz",
      {
        animalId,
        score,
        details,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => response)
    .catch((error) => error);
  let data = {};
  if (axiosRequest instanceof AxiosError) {
    console.log(axiosRequest);
    data = {
      status: "error",
      quizId: null,
    };
    return data;
  }
  data = {
    quizId: axiosRequest.data.quiz_id,
  };
  return data;
};

export const getQuizLoader = async ({ params }) => {
  console.log("getQuizLoader");
  const { quizId } = params;
  console.log(quizId);
  const axiosRequest = await axiosInstance
    .get(`/quiz/result/${quizId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
  let data = {};
  if (axiosRequest instanceof AxiosError) {
    console.log(axiosRequest);
    data = {
      status: "error",
      quiz: null,
    };
    return data;
  }
  data = {
    quiz: axiosRequest.data.quiz,
  };
  console.log(data);
  return data;
};
