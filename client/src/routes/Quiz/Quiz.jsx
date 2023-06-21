import QnA from "../../component/QnA/QnA";
import "./Quiz.css";

function Quiz() {
  return (
    <div className="quiz">
      <div className="quiz-jumlah-soal">
        <h1>1/5</h1>
      </div>
      <div className="top">
        <div className="timer"> 30 </div>
      </div>
      <div className="bottom">
        <QnA />
      </div>
    </div>
  );
}

export default Quiz;
