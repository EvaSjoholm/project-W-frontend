import React from 'react';
import WorkoutImg from 'assets/workout.jpg'

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-wrapper">
          <h1> The Wörkout Effect</h1>
          <img src={WorkoutImg} alt="header-img" height="300px" width="300px" />
        </div>
        <div className="header-text">
          <h1>Less is more</h1>
          <p>Move like water my friend</p>
        </div>
      </div>
    </div>
  )
}