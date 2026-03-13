import type { IQuestion } from "./questionsInterface";

const questions: IQuestion[] = [
    {
        question: "Mis on Eesti pealinn?",
        options: ["Tartu", "Tallinn", "Pärnu", "Narva"],
        correctAnswer: "Tallinn"
    },
    {
        question: "Mis looma on kujutatud Eesti vapil?",
        options: ["Hunt", "Lõvi", "Karu", "Rebane"],
        correctAnswer: "Lõvi"
    },
    {
        question: "Kes on Eesti rahvuslind?",
        options: ["Suitsupääsuke", "Tuvi", "Leevike", "Kuldnokk"],
        correctAnswer: "Suitsupääsuke"
    },
    {
        question: "Mis on Eesti rahvuslill?",
        options: ["Rukkilill", "Moon", "Roos", "Saialill"],
        correctAnswer: "Rukkilill"
    },
    {
        question: "Mis on Eesti rahvuspuu?",
        options: ["Tamm", "Kask", "Mänd", "Kastan"],
        correctAnswer: "Tamm"
    }
];

export default questions;