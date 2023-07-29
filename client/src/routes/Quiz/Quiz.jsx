//import QnA from "../../component/QnA/QnA";
//import Timer from "../../component/Timer/Timer";
import "./Quiz.css";
import { useState, useEffect } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createQuizLoader } from "../../api/quiz";

function Quiz() {
  const [timer, setTimer] = useState(30);
  const [soalIndex, setSoalIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [responseTimes, setResponseTimes] = useState([]);
  const [isCorrectArray, setIsCorrectArray] = useState([]);
  const [isMutated, setIsMutated] = useState(false);
  const { animalId } = useParams();
  const redirect = useNavigate();
  const data = useLoaderData();
  const mutation = useMutation({
    mutationKey: "createQuiz",
    mutationFn: (params) => createQuizLoader(params),
  });

  useEffect(() => {
    console.log("Data dari loader");
    console.log(data);
    console.log(animalId);
  }, [data, animalId]);

  useEffect(() => {
    if (timer === 0) {
      console.log("Waktu habis");
      setTimer(30);
      if (soalIndex + 1 === 5) {
        console.log("Selesai");
        return redirect("/quizresult");
      }
      setSoalIndex((prev) => prev + 1);
    }
    // Mengurangi timer setiap 1 detik
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    // Membersihkan interval saat komponen Timer di-unmount
    return () => clearInterval(interval);
  }, [timer, soalIndex, redirect]);

  const handleAnswer = (answer) => {
    setAnswers((prev) => [...prev, answer]);
    setResponseTimes((prev) => [...prev, 30 - timer]);
    if (answer === data.quizzes[soalIndex].correct_answer) {
      console.log("Benar");
      setIsCorrectArray((prev) => [...prev, true]);
      setScore((prev) => {
        // Update the score state with a callback function
        const newScore = prev + 1;
        // Check if the quiz is finished
        if (soalIndex + 1 === 5) {
          if (isMutated) return;
          // Call the mutation with the updated score
          mutation.mutate({
            animalId: animalId,
            score: newScore,
            details: createData(),
          });
          setIsMutated(true);
          console.log("Selesai");
          return redirect("/quizresult");
        }
        // Return the new score
        return newScore;
      });
    } else {
      console.log("Salah");
      // Check if the quiz is finished
      setIsCorrectArray((prev) => [...prev, false]);
      if (soalIndex + 1 === 5) {
        if (isMutated) return;
        // Call the mutation with the current score
        mutation.mutate({
          animalId: animalId,
          score: score,
          details: createData(),
        });
        setIsMutated(true);
        console.log("Selesai");
        return redirect("/quizresult");
      }
    }
    setSoalIndex((prev) => prev + 1);
  };

  const createData = () => {
    let ret = {};
    for (let i = 0; i < 5; i++) {
      ret = {
        ...ret,
        [i]: {
          question_id: data.quizzes[i].question_id,
          answer: answers[i],
          response_time: responseTimes[i],
          is_correct: isCorrectArray[i],
        },
      };
    }
    return ret;
  };

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
            <div className="question">{data.quizzes[soalIndex].question}</div>
            <div className="answers">
              <div className="answer" onClick={() => handleAnswer("option_1")}>
                {data.quizzes[soalIndex].option_1}
              </div>
              <div className="answer" onClick={() => handleAnswer("option_2")}>
                {data.quizzes[soalIndex].option_2}
              </div>
              <div className="answer" onClick={() => handleAnswer("option_3")}>
                {data.quizzes[soalIndex].option_3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
