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
  answers: { id: number, answer: string, isCorrect: boolean }[];
}

function Questionnaire({ questionEnvironmentEndpoint }: Props) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [score, setScore] = useState(0);

  function handleSubmit() {
    setShowMessage(true);
    }

  function incrementScore() {
    setScore(prevScore => prevScore + 1)
  }

  useEffect(() => {
    fetch(questionEnvironmentEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = data.sort(() => Math.random() - 0.5);
        setQuestions(shuffledData);
      });
  
  }, [questionEnvironmentEndpoint]);


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {questions ? questions.map((question, index) => (
        <Question 
          key={index}
          question={question.question}  
          answers={question.answers}  
          incrementScore={incrementScore}
        />
      )) : 'Loading...'}
      <button 
      type="submit" 
      className="submit-button"
      onClick= {handleSubmit}
      style={{ marginTop: "auto", padding: "10px 20px", alignSelf: "center", backgroundColor: "#4B0082", color:"white", fontWeight:"bold", borderRadius:"5px"}}>
        Valider
      </button>
      {showMessage && (
        <p>Tu as obtenu {score} points.</p>
      )}
    </div>
);

}

export default Questionnaire;