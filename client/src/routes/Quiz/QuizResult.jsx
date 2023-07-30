import React, { useEffect, useCallback } from "react";
import "./QuizResult.css";
import { Link, useLoaderData, useParams } from "react-router-dom";

function QuizResult() {
  const data = useLoaderData();

  useEffect(() => {
    console.log("Quiz Result Loader:");
    console.log(data);
  }, [data]);

  return (
    <React.Fragment>
      <section className="quizresult">
        <div className="box">
          <h4>Congratulation Uun!</h4>
          <img className="w-24 h-24" src="/ikon quiz.svg" alt="ikon" />
          <h4>You earned {data.quiz.score * 20} points!</h4>
        </div>

        <div className="result">
          <h3>RESULTS</h3>
          <img className="w-24 h-24" src="/avatar.svg" alt="avatar" />
          <h4>Uun</h4>
        </div>

        <div className="final-score">FINAL SCORE</div>
        <div className="rectangle">
          <div className="true-main">
            <div className="true-box">{data.quiz.score}</div>
            <h4 className="true-font">TRUE</h4>
          </div>
          <h4 className="colon">:</h4>
          <div className="false-main">
            <div className="false-box">{5 - data.quiz.score}</div>
            <h4 className="false-font">FALSE</h4>
          </div>
        </div>

        <div className="btn">
          <div className="play">
            <Link to="/quiz">
              <button className="btn-play">PLAY AGAIN</button>
            </Link>
          </div>
          <div className="end">
            <Link to="/">
              <button className="btn-end">END</button>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default QuizResult;
