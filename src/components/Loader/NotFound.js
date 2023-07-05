import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button'

export const NotFound = () => {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate('/');
  }

  return (
    <div className="not-found">
      <h2>Page not found </h2>
      <Button text="Home" onClick={returnToHomePage} />
    </div>
  );
}