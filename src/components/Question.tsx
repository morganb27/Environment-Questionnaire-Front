//This component is responsible for displaying the questions and answers

import '../styles/Question.css';

interface Answer {
    id: number;
    answer: string;
    isCorrect: boolean;
  }


interface QuestionProps {
    question: string;
    answers: Answer[];
    incrementScore: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, incrementScore }) => {

    function handleAnswerChange(e: React.ChangeEvent<HTMLInputElement>) {

        const selectedAnswer = e.target.value;
        
        console.log('answers:', answers);
        const correctAnswer = answers.find((a) => a.isCorrect == true)
        console.log('correct answer:', correctAnswer);
        console.log('selected answer:', selectedAnswer);
        console.log('condition result:', correctAnswer && correctAnswer.answer === selectedAnswer);
        
        if (correctAnswer) {
            console.log('correct answer type:', typeof correctAnswer.answer);
            console.log('selected answer type:', typeof selectedAnswer);
        }

        if (correctAnswer && correctAnswer.answer === selectedAnswer) {
            incrementScore();
        }
    }
      

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
                        value={answer.answer}
                        onChange={handleAnswerChange}
                    />
                    <label htmlFor={`answer-${index}`}>{answer.answer}</label>
                </div>
            ))}
            </div>
        </div>
    )
}
  
export default Question;