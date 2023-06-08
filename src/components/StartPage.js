import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Loading } from './Quiz/Loading';

export const StartPage = ({ title }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const onClickToQuiz = () => {
    navigate('/Quiz');
    setLoading(true)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="main">

      <h1>{title}</h1>
      <Button color="black" text="Take Quiz" onClick={onClickToQuiz} />
      {loading}
    </div>
  )
}