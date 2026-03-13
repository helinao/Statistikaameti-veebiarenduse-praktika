import type { IQuestion } from "../questions/questionsInterface";
import { useState } from "react";

type QuestionProps = {
    question: IQuestion;
    isLastQuestion: boolean;
    nextQuestion: () => void;
    onAnswer: (selectedOption: string) => void;
};

const Question = ({ question, isLastQuestion, nextQuestion, onAnswer }: QuestionProps) => {
    const [feedback, setFeedback] = useState("");
    const [hasAnswered, setHasAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const checkAnswer = (option: string) => {
        setSelectedAnswer(option);
        if (option === question.correctAnswer) {
            setFeedback("Õige vastus!");
        } else {
            setFeedback("Vale vastus.");
        }
        setHasAnswered(true);
        onAnswer(option);
    };

    const getButtonClass = (option: string) => {
        if (!hasAnswered) return "";
        if (option === question.correctAnswer) return "correct";
        if (option === selectedAnswer) return "wrong";
        return "";
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <ul className="options">
                {question.options.map((option) => (
                    <li key={option}>
                        <button className={getButtonClass(option)} onClick={() => checkAnswer(option)}
                            disabled={hasAnswered}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
            <h3>{feedback}</h3>

            {hasAnswered && (
                <button onClick={nextQuestion}>
                    {isLastQuestion ? "Tulemuste juurde" : "Järgmine küsimus"}
                </button>
            )}
        </div>
    );
};

export default Question;