/* eslint-disable max-len */
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
            <div className="header-text">
              <h1> #WÖRKOUTFAMILY</h1>

              <img src={WorkoutImg} alt="header-img" height="300px" width="300px" />
            </div>
            <div className="header-text">
              <h1>LESS IS MORE</h1>
              <p>Move like water my friend</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-div">
        <h1>{title}</h1>

        <h3>Our Mission:</h3>
        <h2>To educate as many people as possible on fitness and nutrition and build strong minds and habits</h2>
        <Button text="quiz" onClick={onClickToQuiz} />
      </div>
    </div>
  )
}