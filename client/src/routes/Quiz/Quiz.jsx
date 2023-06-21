import QnA from "../../component/QnA/QnA";
import "./Quiz.css";

function Quiz() {
  return (
    <div className="quiz">
      <div className="quiz border outside">
        <div className="quiz border inside">
          <div className="quiz-jumlah-soal">
            <h2>1/5</h2>
          </div>
          <div className="top">
            <div className="timer"> 30 </div>
          </div>
          <div className="bottom">
            <QnA />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
