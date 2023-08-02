import { useState, useCallback } from "react";
import "./RandomQuiz.css";
import { getRandomAnimalsFunFactLoader } from "../../api/animals";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const RandomQuiz = () => {
  // State untuk melacak apakah setiap kartu sedang terbalik atau tidak
  const [isFlipped, setIsFlipped] = useState([false, false, false]);
  const animalQuery = useQuery({
    queryKey: ["animalQuiz"],
    queryFn: () => getRandomAnimalsFunFactLoader({ count: 3 }),
    staleTime: Infinity,
  });
  const data = animalQuery.data;

  // Fungsi untuk membalikkan kartu dengan indeks yang diberikan

  const handleFlip = useCallback(
    (index) => {
      const newFlipped = [...isFlipped];
      newFlipped[index] = !newFlipped[index];
      setIsFlipped(newFlipped);
    },
    [isFlipped]
  );

  if (animalQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      <h1>Quiz</h1>
      <div className="card-row">
        {data.animals.map((item, index) => (
          <div
            className={`card ${isFlipped[index] ? "flipped" : ""}`}
            key={item.id}
            onClick={() => handleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className={`card-object card-${index + 1}`}>
                  <div
                    className="face front"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="title-wrapper">
                      <h2>{item.animal_name}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-back">
                {/* Bagian belakang kartu dengan aturan kuis */}
                <h3>Rules</h3>
                <ol>
                  <li>Can not go back to the previous question</li>
                  <li>
                    There are 5 questions and only 30 seconds are given each
                    question
                  </li>
                </ol>
                <Link to={"/quiz/" + item.animal_id}>
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
