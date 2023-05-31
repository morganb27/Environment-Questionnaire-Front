//This component is responsible for displaying the questions and answers

import '../styles/Question.css';

interface QuestionProps {
    question: string;
    answers: string[];
}

const Question: React.FC<QuestionProps> = ({ question, answers }) => {
    return (
        <div>
            <div className="question-container">
            <h3 className="question-text">{question}</h3>
            {answers.map((answer, index) => (
                <div className="answer" key={index}>
                    <input 
                        type="radio" 
                        id={`answer-${index}`}
                        name={question}
                        value={answer}
                    />
                    <label htmlFor={`answer-${index}`}>{answer}</label>
                </div>
            ))}
            </div>
        </div>
    )
}
  
export default Question;
