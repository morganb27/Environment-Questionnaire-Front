//This component is responsible for displaying the questions and answers

import '../styles/Question.css';
import { ChangeEvent } from 'react';

interface AnswerType {
  id: number;
  answer: string;
}

interface QuestionType {
  id: number;
  question: string;
  answers: AnswerType[];
}

interface QuestionProps {
    question: QuestionType;
    handleAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => {   
    return (
        <div className="question-container">
            <h3 className="question-text">{question.question}</h3>
            {question.answers.map((answer, index) => (
                <div className="answer" key={answer.id}>
                    <input 
                        type="radio" 
                        id={`answer-${question.id}-${index}`}
                        name={question.id.toString()}
                        value={answer.id}
                        onChange={handleAnswer}
                    />
                    <label htmlFor={`answer-${question.id}-${index}`}>{answer.answer}</label>
                </div>
            ))}
        </div>
    )
}
  
export default Question;
