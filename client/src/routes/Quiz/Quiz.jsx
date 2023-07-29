import "./Quiz.css";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createQuizLoader } from "../../api/quiz";
import { useTimer } from "../../component/Timer/Timer";

function Quiz() {
  const [timer, setTimer] = useTimer(30);
  const [soalIndex, setSoalIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isMutated, setIsMutated] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [quizDetails, setQuizDetails] = useState([]);
  const { animalId } = useParams();
  const redirect = useNavigate();
  const data = useLoaderData();
  const mutation = useMutation({
    mutationKey: "createQuiz",
    mutationFn: (params) => createQuizLoader(params),
  });

  useEffect(() => {
    console.log(data);
  }, []);

  useEffect(() => {
    // increment the question index when the timer runs out or reset
    if (timer === 0) {
      setSoalIndex((prev) => prev + 1);
      setTimer(30); // reset the timer
    }
  }, [timer, setTimer, setSoalIndex]); // pass the custom setter as a dependency

  useEffect(() => {
    if (soalIndex === 5) {
      setIsFinished(true);
    }
  }, [soalIndex]);

  useEffect(() => {
    if (mutation.isSuccess) {
      redirect("/quizresult");
    }
  }, [mutation, redirect]);

  const handleAnswer = useCallback(
    (answer) => {
      if (soalIndex < 5) {
        const isCorrect = data.quizzes[soalIndex].correct_answer === answer;
        console.log("Benar? ", isCorrect);
        const responseTime = 30 - timer;
        setScore((prev) => (isCorrect ? prev + 1 : prev));
        setQuizDetails((prev) => [
          ...prev,
          {
            quiz_id: data.quizzes[soalIndex].question_id,
            selected_option: answer,
            is_correct: isCorrect,
            response_time: responseTime,
          },
        ]);
        setTimer(30);
        setSoalIndex((prev) => (prev < 5 ? prev + 1 : prev));
      }
    },
    [soalIndex, timer, data, setTimer]
  );

  useEffect(() => {
    if (isFinished && !isMutated) {
      mutation.mutate({
        animalId: animalId,
        score: score,
        details: quizDetails,
      });
      setIsMutated(true);
    }
  }, [isFinished, isMutated, mutation, animalId, score, quizDetails]);

  return (
    <div className="quiz">
      <div className="quiz border outside">
        <div className="quiz-jumlah-soal">
          <h2>{soalIndex + 1}/5</h2>
        </div>
        <div className="top">
          <div className="timer">{timer < 10 ? `0${timer}` : timer}</div>
        </div>
        <div className="bottom">
          <div className="qna">
            <div className="question">
              {data?.quizzes[soalIndex]?.question ?? "Loading..."}
            </div>
            <div className="answers">
              <div className="answer" onClick={() => handleAnswer("option_1")}>
                {data?.quizzes[soalIndex]?.option_1 ?? "Loading..."}
              </div>
              <div className="answer" onClick={() => handleAnswer("option_2")}>
                {data?.quizzes[soalIndex]?.option_2 ?? "Loading..."}
              </div>
              <div className="answer" onClick={() => handleAnswer("option_3")}>
                {data?.quizzes[soalIndex]?.option_3 ?? "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
