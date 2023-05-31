//This component is responsible for fetching the questions from the backend.

import { useEffect, useState } from "react";
import Question from "./Question";

interface Props {
  questionEnvironmentEndpoint: string;
  questionMitigationEndpoint: string;
}

interface QuestionType {
  id: number;
  question: string;
  answers: { id: number, answer: string }[];
}

function Questionnaire({ questionEnvironmentEndpoint }: Props) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    fetch(questionEnvironmentEndpoint)
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, [questionEnvironmentEndpoint]);


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {questions ? questions.map((question, index) => (
        <Question 
          key={index}
          question={question.question}  
          answers={question.answers.map(a => a.answer)}  
        />
      )) : 'Loading...'}
      <button 
      type="submit" 
      className="submit-button"
      style={{ marginTop: "auto", padding: "10px 20px", alignSelf: "center", backgroundColor: "#4B0082", color:"white", fontWeight:"bold", borderRadius:"5px"}}>
        Valider
      </button>
    </div>
);

}

export default Questionnaire;
