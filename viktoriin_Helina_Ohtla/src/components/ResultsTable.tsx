import type { IQuestion } from "../questions/questionsInterface";

type ResultsTableProps = {
    questions: IQuestion[];
    answers: string[];
};

const ResultsTable = ({ questions, answers }: ResultsTableProps) => {
    return (
        <div>
            <h2>Viktoriini tulemused</h2>
            <table>
                <thead>
                    <tr>
                        <th>Küsimus</th>
                        <th>Sinu vastus</th>
                        <th>Tulemus</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.question}</td>
                            <td>{answers[index] || "Pole vastust"}</td>
                            <td className={
                                answers[index] === question.correctAnswer
                                ? "result-correct"
                                : "result-wrong"
                            }>
                            {answers[index] === question.correctAnswer 
                                ? "Õige" 
                                : "Vale"
                            }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsTable;