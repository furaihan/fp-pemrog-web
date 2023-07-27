import { useState } from "react";
import "./RandomQuiz.css";
import { Link } from "react-router-dom";

const RandomQuiz = () => {
  // State untuk melacak apakah setiap kartu sedang terbalik atau tidak
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  // Fungsi untuk membalikkan kartu dengan indeks yang diberikan
  const handleFlip = (index) => {
    const newFlipped = [...isFlipped];
    newFlipped[index] = !newFlipped[index];
    setIsFlipped(newFlipped);
  };

  // Data kuis yang berisi id, gambar, dan judul
  const OurQuiz = [
    {
      id: 1,
      image: "lesser-bilby.jpg",
      title: "Lesser Bilby",
    },
    {
      id: 2,
      image: "takahe.jpg",
      title: "Takahe",
    },
    {
      id: 3,
      image: "irish-elk.jpg",
      title: "Irish Elk",
    },
  ];

  return (
    <div className="card-container">
      <h1>Quiz</h1>
      <div className="card-row">
        {OurQuiz.map((item) => (
          <div
            className={`card ${isFlipped[item.id - 1] ? "flipped" : ""}`}
            key={item.id}
            onClick={() => handleFlip(item.id - 1)}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className={`card-object card-${item.id}`}>
                  <div
                    className="face front"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="title-wrapper">
                      <div className="title">{item.title}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-back">
                {/* Bagian belakang kartu dengan aturan kuis */}
                <h3>Rules</h3>
                <ol>
                  <li>Can't go back to the previous question</li>
                  <li>
                    There are 5 questions and only 30 seconds are given each
                    question
                  </li>
                </ol>
                <Link to="/quiz">
                  <button className="play">Play</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomQuiz;
