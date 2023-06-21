import QnA from "../../component/QnA/QnA";
import "./Quiz.css";

function Quiz(){
    return(
            <main>
                <div className="quiz">
                    <div className="quiz-jumlah-soal">
                        <h1>1/5</h1>
                    </div>
                    <div className="top">
                        <div className="timer"> 30 </div>
                   </div>
                   <div class="bottom"><QnA /></div>
            </div>
            </main>

    );
}

export default Quiz;