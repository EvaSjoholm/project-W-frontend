import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const StartPage = ({ title }) => {
  const navigate = useNavigate();

  const onClickToQuiz = () => {
    navigate('/Quiz');
  }

  return (
    <div className="main">
      <h1>{title}</h1>
      <Button color="black" text="Take Quiz" onClick={onClickToQuiz} />
    </div>
  )
}