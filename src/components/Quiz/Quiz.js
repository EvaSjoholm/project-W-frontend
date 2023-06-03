/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { Button } from 'components/Button';
import { Question } from './Question';

export const Quiz = () => {
  const [quizzes, setQuizzes] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const nextQuestion = (questionsLength) => () => {
    console.log('next', currentQuestion)
    if (currentQuestion < questionsLength - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  const prevQuestion = () => {
    console.log('prev')
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  useEffect(() => {
    fetch('https://finale-project-backend.onrender.com/quizzes')
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div className="content-container">
      {quizzes.map((quiz) => {
        const question1 = quiz.questions[currentQuestion];
        return (
          <div className="content-wrapper" key={quiz._id}>
            <h3>{quiz.title}</h3>
            <Question
              id={question1._id}
              title={question1.questionText}
              options={question1.options} />
            <Button color="Pink" text="NEXT" onClick={nextQuestion(quiz.questions.length)} />
            <Button color="Pink" text="PREV" onClick={prevQuestion} />
          </div>
        )
      })}
    </div>
  )
}