import type { IQuestion } from "../questions/questionsInterface";

type QuestionProps = {
    question: IQuestion;
};

const Question = ({ question }: QuestionProps) => {
    return (
        <div>
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option) => (
                    <div key={option}>
                        <button>
                            {option}
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Question;