/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { Question } from './Question';
import { Summary } from './Summary';

export const Quiz = () => {
  const [quizzes, setQuizzes] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])

  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [submitted, setSubmitted] = useState(false)

  const nextQuestion = (questionsLength) => () => {
    console.log('next', currentQuestion)
    if (currentQuestion < questionsLength - 1) {
      setCurrentQuestion(currentQuestion + 1)
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

  useEffect(() => {
    if (quizzes.length > 0) {
      const currentQuiz = quizzes[0];
      // setIsLastQuestion(currentQuestion === currentQuiz.questions.length - 1);
      setIsLastQuestion(currentQuestion === currentQuiz.questions.length);
    }
  }, [currentQuestion, quizzes])

  const handleAnswerChange = (event) => {
    const selectedOption = event.target.value
    console.log('Selected Option', selectedOption)
    answers[currentQuestion] = {
      question: quizzes[0].questions[currentQuestion].questionText,
      option: selectedOption
    }
    setAnswers(answers)
    console.log(answers)
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
            {!submitted ? (
              <>
                <h3>{quiz.title}</h3>
                <Question
                  id={question1._id}
                  title={question1.questionText}
                  options={question1.options}
                  handleAnswerChange={handleAnswerChange} />
                <Button
                  color="Pink"
                  text={isLastQuestion ? 'SUBMIT' : 'NEXT'}
                  onClick={isLastQuestion ? submitQuiz : nextQuestion(quiz.questions.length)} />
              </>
            ) : (

              <Summary
                answers={answers} />
            )}
          </div>
        )
      })}
    </div>
  )
}