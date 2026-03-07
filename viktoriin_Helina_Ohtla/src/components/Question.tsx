import type { IQuestion } from "../questions/questionsInterface";
import { useState } from "react";

type QuestionProps = {
    question: IQuestion;
    nextQuestion: () => void;
};

const Question = ({ question }: QuestionProps) => {
    const [feedback, setFeedback] = useState("");
    const checkAnswer = (option: string) => {
        if (option === question.correctAnswer) {
            setFeedback("Õige vastus!");
        } else {
            setFeedback("Vale vastus.");
        }
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option) => (
                    <div key={option}>
                        <button onClick={() => checkAnswer(option)}>
                            {option}
                        </button>
                    </div>
                ))}
            </ul>
            <h3>{feedback}</h3>
        </div>

    );
};

export default Question;