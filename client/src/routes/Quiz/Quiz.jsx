import "./Quiz.css";
import { useState, useEffect, useCallback } from "react";
import { useLoaderData, useParams, Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createQuizLoader } from "../../api/quiz";

function Quiz() {
  const [timer, setTimer] = useState(30);
  const [soalIndex, setSoalIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isMutated, setIsMutated] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [quizDetails, setQuizDetails] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { animalId } = useParams();
  const data = useLoaderData();
  const mutation = useMutation({
    mutationKey: "createQuiz",
    mutationFn: (params) => createQuizLoader(params),
  });
  useEffect(() => {
    // increment the question index when the timer runs out or reset
    if (timer === 0) {
      setQuizDetails((prev) => [
        ...prev,
        {
          question_id: data.quizzes[soalIndex].question_id,
          selected_option: "timeout",
          is_correct: null,
          response_time: null,
        },
      ]);
      setSoalIndex((prev) => prev + 1);
      setTimer(30); // reset the timer
    }
    // Mengurangi timer setiap 1 detik
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    // Membersihkan interval saat komponen Timer di-unmount
    return () => clearInterval(interval);
  }, [timer, setTimer, soalIndex, data]); // pass the custom setter as a dependency

  useEffect(() => {
    if (soalIndex === 5) {
      setIsFinished(true);
    }
  }, [soalIndex]);

  useEffect(() => {
    if (mutation.isSuccess) {
      setShouldRedirect(true);
    }
  }, [mutation]);

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
            question_id: data.quizzes[soalIndex].question_id,
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

  if (shouldRedirect) {
    return <Navigate to={`/quiz/result/${mutation.data.quizId}`} />;
  }

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
