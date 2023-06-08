import React from 'react';
import workoutImg from 'assets/workout.jpg'

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img src={workoutImg} alt="header-img" height="200px" width="200px;" />
        <div className="header-text">
          <h1> The Wörkout Effect</h1>
          <p>Move like water my friend</p>
        </div>
      </div>
    </div>
  )
}