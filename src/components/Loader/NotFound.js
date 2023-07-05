import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate('/');
  }

  return (
    <div className="box-div">
      <p>Ooh noo.... Page not found </p>
      <button type="button" onClick={returnToHomePage}>Return here</button>
    </div>
  );
}