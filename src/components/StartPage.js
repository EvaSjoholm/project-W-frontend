import React from 'react';
import { Button } from './Button';

export const StartPage = ({ title }) => {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <div className="main">
      <h1>{title}</h1>
      <Button color="black" text="QUIZ" onClick={onClick} />
    </div>
  )
}