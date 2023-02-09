import { questonBank } from "./questionBank";

export const QuestionBankDashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">Question</div>
          <div className="col-md-3">Answers</div>
          <div className="col-md-3">Exams</div>
          <div className="col-md-1">Difficulty</div>
          <div className="col-md-1">Select</div>
        </div>
        {questonBank.map((quesion, idx) => {
          return (
            <div className="row">
              <div className="col-md-4">{quesion.questionText}</div>
              <div className="col-md-3">{quesion.answers.join(", ")}</div>
              <div className="col-md-3">{quesion.exams.join(", ")}</div>
              <div className="col-md-1">{quesion.difficulty}</div>
              <div className="col-md-1">
                <checkbox id={idx}></checkbox>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
