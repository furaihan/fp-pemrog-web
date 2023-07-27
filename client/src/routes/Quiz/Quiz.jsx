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
  const animalId = useParams();
  const redirect = useNavigate();
  const data = useLoaderData();
  const mutation = useMutation({
    mutationKey: "createQuiz",
    mutationFn: createQuizLoader,
  });

  useEffect(() => {
    console.log("Data dari loader");
    console.log(data);
  }, [data]);

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
    if (answer === data.quizzes[soalIndex].correct_answer) {
      console.log("Benar");
      setScore((prev) => prev + 1);
    } else {
      console.log("Salah");
    }
    if (soalIndex + 1 === 5) {
      mutation.mutate({
        animalId: animalId,
        score: score,
      });
      console.log("Selesai");
      return redirect("/quizresult");
    }
    setSoalIndex((prev) => prev + 1);
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
