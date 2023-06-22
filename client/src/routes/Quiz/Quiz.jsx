import QnA from "../../component/QnA/QnA";
import Timer from "../../component/Timer/Timer";
import "./Quiz.css";

function Quiz() {
  return (
    <div className="quiz">
      <div className="quiz border outside">
          <div className="quiz-jumlah-soal">
            <h2>1/5</h2>
          </div>
          <div className="top">
            <div className="timer"> <Timer /> </div>
          </div>
          <div className="bottom">
            <QnA />
          </div>
        </div>
    </div>
  );
}

export default Quiz;
