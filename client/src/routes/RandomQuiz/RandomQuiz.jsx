import React, { useState } from 'react';
import './RandomQuiz.css';

const RandomQuiz = () => {
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...isFlipped];
    newFlipped[index] = !newFlipped[index];
    setIsFlipped(newFlipped);
  };

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
      <div className="card-row">
        <div className={`card ${isFlipped[0] ? 'flipped' : ''}`} onClick={() => handleFlip(0)}>
          <div className="card-inner">
            <div className="card-front">
            {OurQuiz.map((item) => (
        <div className="card-front" key={item.id}>
          <div className={`card-object card-${item.id}`}>
            <div className="face front" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="title-wrapper">
                <div className="title">{item.title}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
            </div>

            <div className="card-back">
              <h2>Rules</h2>
              <ul>
                <li>hgjhvjhb</li>
              </ul>
              <button className='play'>Play</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuiz;
