import { useState, useRef } from "react";
import { questonBank } from "./questionBank";
import "./QuestionBankDashboard.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const QuestionBankDashboard = () => {
  const [selectedQuestions, setSelecteduestions] = useState([]);

  const printRef = useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  const onQuestionSelect = (question) => {
    const updatedQuestion = selectedQuestions.find(
      (q) => q.questionId === question.questionId
    );
    if (updatedQuestion) {
      const indexOfRemovedQuestion = selectedQuestions.findIndex(
        (ques) => ques !== question.questionId
      );

      const updatedQuestions = [...selectedQuestions];

      for (
        let index = indexOfRemovedQuestion + 1;
        index < selectedQuestions.length;
        index++
      ) {
        updatedQuestions[index].questionNumber =
          updatedQuestions[index].questionNumber - 1;
      }
      setSelecteduestions(
        updatedQuestions.filter((q) => q.questionId !== question.questionId)
      );
    } else {
      const lastQuestionNumber =
        selectedQuestions.length > 0
          ? selectedQuestions[selectedQuestions.length - 1].questionNumber
          : 0;
      setSelecteduestions((prev) => [
        ...prev,
        { ...question, questionNumber: lastQuestionNumber + 1 },
      ]);
    }
  };

  return (
    <>
      <div className="container margin-y-20">
        <div className="row">
          <div className="col-md-4 grid-header">Question</div>
          <div className="col-md-3 grid-header">Answers</div>
          <div className="col-md-3 grid-header">Exams</div>
          <div className="col-md-1 grid-header">Difficulty</div>
          <div className="col-md-1 grid-header">Select</div>
        </div>
        {questonBank.map((quesion) => {
          return (
            <div className="row">
              <div className="col-md-4">{quesion.questionText}</div>
              <div className="col-md-3">{quesion.answers.join(", ")}</div>
              <div className="col-md-3">{quesion.exams.join(", ")}</div>
              <div className="col-md-1">{quesion.difficulty}</div>
              <div className="col-md-1">
                <input
                  type="checkbox"
                  onChange={() => onQuestionSelect(quesion)}
                />
              </div>
            </div>
          );
        })}
      </div>
      {selectedQuestions.length > 0 && (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-4 grid-header">Question</div>
              <div className="col-md-2 grid-header">Question Number</div>
            </div>
            {selectedQuestions.map((selectedQuestion, idx) => {
              return (
                <div className="row width-500">
                  <div className="col-md-4">
                    {
                      questonBank.find(
                        (ques) =>
                          ques.questionId === selectedQuestion.questionId
                      )?.questionText
                    }
                  </div>
                  <div className="col-md-1">
                    {selectedQuestion.questionNumber}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ float: "right", margin: "0 30px" }}>
            <button onClick={handleDownloadPdf}>
              Download Sample Question Paper
            </button>
          </div>
          <div className="sample-question-paper" ref={printRef}>
            <div style={{ marginLeft: "300px", marginTop: "60px" }}>
              <h3>Sample Question Paper</h3>
            </div>
            {selectedQuestions.map((selectedQuestion) => {
              return (
                <>
                  <div className="container margin-y-20">
                    <div className="row">
                      <div className="col-md-12 margin-y-5">
                        Question {`${selectedQuestion.questionNumber}. `}
                        {selectedQuestion.questionText}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        a. {selectedQuestion.answers[0]}
                      </div>
                      <div className="col-md-6">
                        b. {selectedQuestion.answers[1]}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        c. {selectedQuestion.answers[2]}
                      </div>
                      <div className="col-md-6">
                        d. {selectedQuestion.answers[3]}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
