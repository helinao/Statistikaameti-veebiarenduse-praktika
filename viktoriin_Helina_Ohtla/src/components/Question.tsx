import type { IQuestion } from "../questions/questionsInterface";
import { useState, useEffect } from "react";

type QuestionProps = {
    question: IQuestion;
    nextQuestion: () => void;
    onAnswer: (selectedOption: string) => void;
};

const Question = ({ question, nextQuestion, onAnswer }: QuestionProps) => {
    const [feedback, setFeedback] = useState("");
    const [hasAnswered, setHasAnswered] = useState(false);
    
    useEffect(() => {
        setFeedback("");
        setHasAnswered(false);
    }, [question]);

    const checkAnswer = (option: string) => {
        if (option === question.correctAnswer) {
            setFeedback("Õige vastus!");
        } else {
            setFeedback("Vale vastus.");
        }
        setHasAnswered(true);
        onAnswer(option);
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option) => (
                    <div key={option}>
                        <button onClick={() => checkAnswer(option)}
                            disabled={hasAnswered}>
                            {option}
                        </button>
                    </div>
                ))}
            </ul>
            <h3>{feedback}</h3>

            {hasAnswered && (
                <button onClick={nextQuestion}>Järgmine küsimus</button>
            )}
        </div>
    );
};

export default Question;