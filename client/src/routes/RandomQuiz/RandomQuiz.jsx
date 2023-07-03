import React, { useState } from 'react';
import './RandomQuiz.css';

function RandomQuiz() {
  const [slideDirection, setSlideDirection] = useState('');

  function handlePrevClick() {
    setSlideDirection('right');
  }

  function handleNextClick() {
    setSlideDirection('left');
  }

  return (
    <>
      <div className="card-quiz">
        <div className="info-quiz">
          <div className="info-wrapper">
            <div className={`info previous-quiz ${slideDirection ? `slide-${slideDirection}` : ''}`}>
              <h1 className="Animal-name">Highlands</h1>
              <p className="Quiz-description">The mountains are calling</p>
            </div>
            <div className={`info current-quiz ${slideDirection ? `slide-${slideDirection}` : ''}`}>
              <h1 className="Animal-name">Highlands</h1>
              <p className="Quiz-description">The mountains are calling</p>
            </div>
            <div className={`info next-quiz ${slideDirection ? `slide-${slideDirection}` : ''}`}>
              <h1 className="Animal-name">Highlands</h1>
              <p className="Quiz-description">The mountains are calling</p>
            </div>
          </div>
        </div>

        <div className="card-quiz-list">
          <div className={`cards-wrapper ${slideDirection ? `slide-${slideDirection}` : ''}`}>
            <div className="card previous-wrapper">
              <div className="card-image">
                <img src="irish-elk.jpg" alt="" />
              </div>
            </div>
            <div className="card current-wrapper">
              <div className="card-image">
                <img src="irish-elk.jpg" alt="" />
              </div>
            </div>
            <div className="card next-wrapper">
              <div className="card-image">
                <img src="irish-elk.jpg" alt="" />
              </div>
            </div>
          </div>
          <button className="card-btn-left" onClick={handlePrevClick}>
            <div className="left-arrow">
              <img src="" alt="" />
            </div>
          </button>
          <button className="card-btn-right" onClick={handleNextClick}>
            <div className="right-arrow">
              <img src="" alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default RandomQuiz;
