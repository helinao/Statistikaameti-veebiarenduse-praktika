import { useState } from 'react'
import Question from './components/Question'
import questions from './questions/questionsData'

import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]
  return (
    <>
    <h1>Eesti teemaline viktoriin</h1>
      <Question 
        question={currentQuestion} 
      />
    </>
  )
}

export default App
