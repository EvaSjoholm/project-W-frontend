/* eslint-disable no-underscore-dangle */
import { Button } from 'components/Button';
import React, { useState } from 'react';
import { Question } from './Question';

export const Quiz = ({ quiz, quizDone }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [onLast, setOnLast] = useState(false)
  const [answers, setAnswers] = useState({})

  const nextQuestion = () => {
    const nextIndex = currentQuestionIdx + 1
    if (quiz.questions[nextIndex]) {
      setCurrentQuestionIdx(currentQuestionIdx + 1)
    }

    if (nextIndex + 1 === quiz.questions.length) {
      setOnLast(true)
    }
  }

  const storeAnswer = (answer, id) => {
    answers[id] = answer
    setAnswers(answers)
  }

  const currentQuestion = quiz.questions[currentQuestionIdx]

  return (
    <div className="content-container">
      <Question
        id={currentQuestion._id}
        title={currentQuestion.questionText}
        options={currentQuestion.options}
        handleAnswerChange={(e) => { storeAnswer(e.target.value, currentQuestion._id) }} />
      {
        onLast ? (
          <Button text="Submit" onClick={() => { quizDone(answers) }} />
        ) : (
          <Button text="Next" onClick={nextQuestion} />
        )
      }
    </div>
  )
};