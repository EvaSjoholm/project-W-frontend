import React from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutImg from 'assets/workout.jpg'
import { Button } from './Button';

export const StartPage = ({ title }) => {
  const navigate = useNavigate();

  const onClickToQuiz = () => {
    navigate('/quizzes');
  }

  return (
    <div className="main">
      <div className="header">
        <div className="header-container">
          <div className="header-wrapper">
            <h1> #WÖRKOUTFAMILY</h1>
            <img src={WorkoutImg} alt="header-img" height="300px" width="300px" />
          </div>
          <div className="header-text">
            <h1>Less is more</h1>
            <p>Move like water my friend</p>
          </div>
        </div>
      </div>
      <h1>{title}</h1>
      <Button color="black" text="Take Quiz" onClick={onClickToQuiz} />
    </div>
  )
}