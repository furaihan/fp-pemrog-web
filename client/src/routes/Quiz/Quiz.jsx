//import QnA from "../../component/QnA/QnA";
//import Timer from "../../component/Timer/Timer";
import "./Quiz.css";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

const soal = [
  {
    id: 1,
    soal: "Binatang takahe termasuk dalam keluarga burung apa?",
    a: "Rallidae",
    b: "Psittacidae",
    c: "Strigidae",
    jawaban: "a",
  },
  {
    id: 2,
    soal: "Bagian tubuh mana yang berwarna merah pada binatang takahe?",
    a: "Paruh dan kaki",
    b: "Mata dan sayap",
    c: "Ekor dan kepala",
    jawaban: "a",
  },
  {
    id: 3,
    soal: "Berapa berat rata-rata binatang takahe?",
    a: "0.5 - 1 kg",
    b: "2.3 - 3.8 kg",
    c: "4.5 - 6 kg",
    jawaban: "b",
  },
  {
    id: 4,
    soal: "Apa yang menjadi makanan utama binatang takahe di padang rumput?",
    a: "Biji-bijian dan buah-buahan",
    b: "Serangga dan cacing tanah",
    c: "Dasar daun tussock dan sedge",
    jawaban: "c",
  },
  {
    id: 5,
    soal: "Berapa jumlah populasi binatang takahe yang masih hidup hingga Oktober 2021?",
    a: "100 ekor",
    b: "440 ekor",
    c: "1000 ekor",
    jawaban: "b",
  },
];

function Quiz() {
  const [timer, setTimer] = useState(30);
  const [soalIndex, setSoalIndex] = useState(0);
  useEffect(() => {
    if (timer === 0) {
      console.log("Waktu habis");
      setTimer(30);
      setSoalIndex((prev) => prev + 1);
    }
    // Mengurangi timer setiap 1 detik
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    // Membersihkan interval saat komponen Timer di-unmount
    return () => clearInterval(interval);
  }, [timer]); // Tambahkan array kosong sebagai dependensi untuk menjalankan efek sekali saat komponen pertama kali di-mount

  const handleAnswer = (answer) => {
    if (answer === soal[soalIndex].jawaban) {
      console.log("Benar");
    } else {
      console.log("Salah");
    }
    if (soalIndex + 1 === soal.length) {
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
            <div className="question">{soal[soalIndex].soal}</div>
            <div className="answers">
              <div className="answer" onClick={() => handleAnswer("a")}>
                {soal[soalIndex].a}
              </div>
              <div className="answer" onClick={() => handleAnswer("b")}>
                {soal[soalIndex].b}
              </div>
              <div className="answer" onClick={() => handleAnswer("c")}>
                {soal[soalIndex].c}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
