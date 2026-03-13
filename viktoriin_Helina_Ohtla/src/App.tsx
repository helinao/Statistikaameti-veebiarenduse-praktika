import { useState } from 'react'
import Question from './components/Question'
import questions from './questions/questionsData'
import ResultsTable from './components/ResultsTable'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  //quiz finished
  const [isQuizFinished, setIsQuizFinished] = useState(false)
  //save answers
  const [answers, setAnswers] = useState<string[]>([])
  const handleAnswer = (selectedOption: string) => {
    setAnswers([...answers, selectedOption])
  }

  const currentQuestion = questions[currentQuestionIndex]

  //moving to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setIsQuizFinished(true)
    }
  }

  // score calculation
  const score = answers.filter((answer, index) => 
    answer === questions[index].correctAnswer).length

  //message with score
  const scoreMessage =
    score === questions.length
      ? "Suurepärane! Sa vastasid õigesti kõikidele küsimustele!"
      : score >= 3
      ? "Hea töö! Sa vastasid õigesti enamustele küsimustele."
      : "Hea algus! Proovi uuesti, et parandada oma tulemust."

  return (
    <div className="app-container">
    <h1>Eesti teemaline viktoriin</h1>

    {!isQuizFinished && (
      <Question 
        question={currentQuestion} 
        nextQuestion={nextQuestion}
        onAnswer={handleAnswer}
      />
    )}
    {isQuizFinished && (
      <div>
        <h2>Viktoriin on lõppenud!</h2>
        <p>Kogusid viktoriinis {score} punkti võimalikust {questions.length} punktist.</p>
        <p>{scoreMessage}</p>
        <ResultsTable
          questions={questions}
          answers={answers}
        />
      </div>
    )}
    </div>
  )
}

export default App
