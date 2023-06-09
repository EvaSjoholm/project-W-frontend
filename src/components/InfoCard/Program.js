/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Workout from 'assets/workout.jpg'
import './Card.css'

export const Program = () => {
  return (
    <div className="program-section">
      <div className="class-card">
        <div className="class-img">
          <img src={Workout} alt="Bootcamp-Image" />
        </div>
        <div className="class-text">
          <p>Join our WÖRKOUT family, fill out our QUIZ to get a ahead of your journey!</p>
          <button
            className="textbutton"
            type="button"
            aria-label="button to take quiz for program search">See more
          </button>
        </div>
      </div>
    </div>
  )
}