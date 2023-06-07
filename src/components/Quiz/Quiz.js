/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { Button } from 'components/Button';
import { Question } from './Question';
import { Summary } from './Summary';

export const Quiz = () => {
  const [quizzes, setQuizzes] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [workoutType, setWorkoutType] = useState('')
  const [workoutStruggle, setWorkoutStruggle] = useState('')
  const [workoutLevel, setWorkoutLevel] = useState('')
  const [contact, setContact] = useState('')

  const [submitted, setSubmitted] = useState(false)

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

  const handleAnswerChange = (event) => {
    const selectedOption = event.target.value
    console.log('Selected Option', selectedOption)

    if (currentQuestion <= 0) {
      setWorkoutType(event.target.value)
    } else if (currentQuestion === 1) {
      setWorkoutStruggle(event.target.value)
    } else if (currentQuestion === 2) {
      setWorkoutLevel(event.target.value)
    } else if (currentQuestion === 3) {
      setContact(event.target.value)
    }
    console.log(workoutType, workoutStruggle, workoutLevel, contact)
  }

  const submitQuiz = () => {
    setSubmitted(true);
  };

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
              options={question1.options}
              handleAnswerChange={handleAnswerChange} />
            <Button color="Pink" text="NEXT" onClick={nextQuestion(quiz.questions.length)} />
            <Button color="Pink" text="PREV" onClick={prevQuestion} />
            {submitted && (
              <Summary chosenOptions={[workoutType, workoutStruggle, workoutLevel, contact]} />
            )}
            <Button color="Red" text="SUBMIT" onClick={submitQuiz} />
          </div>
        )
      })}
    </div>
  )
}