import { useState } from 'react'
import Question from './components/Question'
import questions from './questions/questionsData'

import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  //save answers
  const [answers, setAnswers] = useState<string[]>([])
  const handleAnswer = (selectedOption: string) => {
    setAnswers([...answers, selectedOption])
  }

  const currentQuestion = questions[currentQuestionIndex]

  //moving to next question
    const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  return (
    <>
    <h1>Eesti teemaline viktoriin</h1>
      <Question 
        question={currentQuestion} 
        nextQuestion={nextQuestion}
        onAnswer={handleAnswer}
      />
    </>
  )
}

export default App
