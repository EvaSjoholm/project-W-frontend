/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { Quiz } from './Quiz';
import { Summary } from './Summary';
import { Loading } from '../Loader/Loading'

export const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([])
  const [currentQuiz, setCurrentQuiz] = useState({})
  const [quizDone, setQuizDone] = useState(false)
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Fetching quizzes')
    fetch('https://finale-project-backend.onrender.com/quizzes')
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data)
          .finally(() => setLoading(false));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleQuizDone = (incomingAnswers) => {
    console.log('Quiz done!')
    setQuizDone(true)

    setAnswers(currentQuiz.questions.map((question) => {
      return {
        question: question.questionText,
        option: incomingAnswers[question._id]
      }
    }))
    console.log(JSON.stringify(answers))
  }

  const navigate = useNavigate();

  if (loading) {
    return <Loading />
  }

  const shouldContact = () => {
    const contactOption = answers[answers.length - 1].option
    return contactOption === 'Yes' || contactOption === 'Contact me'
  }

  if (!currentQuiz.title) {
    console.log('No chosen quiz')
    return (
      <div className="content-container">
        {
          quizzes.map((quiz) => {
            return (
              <div className="content-wrapper" key={quiz._id}>
                <h3>{quiz.title}</h3>
                <Button text="Take quiz" onClick={() => setCurrentQuiz(quiz)} />
                {loading}
              </div>
            )
          })
        }
      </div>
    );
  } else {
    return quizDone ? (
      <div className="summary-container">
        <Summary answers={answers} />
        {
          shouldContact()
            ? (<Button text="Sign up" onClick={() => { navigate('/contact') }} />)
            : (<Button text="Home" onClick={() => { navigate('/') }} />)
        }
      </div>
    ) : (
      <Quiz quiz={currentQuiz} quizDone={handleQuizDone} />
    );
  }
};