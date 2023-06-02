import { useEffect, useState } from "react";
import Question from "./Question";

interface Props {
  questionEndpoint: string;
}

interface QuestionType {
  id: number;
  question: string;
  answers: { id: number, answer: string, }[];
}

function Questionnaire({ questionEndpoint }: Props) {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [score, setScore] = useState(0);
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<{questionId: number, answerId: number}[]>([]);
  
  async function handleSubmit() {
    try {
      const response = await fetch('/submit_answers', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({answers: questionnaireAnswers}),
      });
      const data = await response.json();
      console.log(data);
      setScore(data.score);
      setShowMessage(true);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  }

  function handleAnswerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const questionId = parseInt(e.target.name);
    const answerId = parseInt(e.target.value);
    let newQuestionnaireAnswers = questionnaireAnswers.filter(item => item.questionId !== questionId);
    newQuestionnaireAnswers.push({questionId: questionId, answerId: answerId});
    setQuestionnaireAnswers(newQuestionnaireAnswers);
  }

  useEffect(() => {
    (async function fetchQuestions() {
      try {
        const response = await fetch(questionEndpoint);
        const data: QuestionType[] = await response.json();
        const shuffledData = data.sort(() => Math.random() - 0.5);
        setQuestions(shuffledData);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    })();
  }, [questionEndpoint]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {questions ? questions.map((question) => (
        <Question 
          key={question.id}
          question={question}  
          handleAnswer={handleAnswerChange}
        />
      )) : 'Loading...'}
      <button 
        type="submit" 
        className="submit-button"
        onClick={handleSubmit}
        style={{ marginTop: "auto", padding: "10px 20px", alignSelf: "center", backgroundColor: "#4B0082", color:"white", fontWeight:"bold", borderRadius:"5px"}}
      >
        Valider
      </button>
      {showMessage && (
        <p>Tu as obtenu {score} points.</p>
      )}
    </div>
  );
}

export default Questionnaire;
