/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Workout from 'assets/workout.jpg'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import './Card.css'

export const Program = () => {
  const navigate = useNavigate();

  const onClickToContact = () => {
    navigate('/contact')
  }
  return (
    <div className="program-section">
      <div className="class-card">
        <div className="class-img">
          <img src={Workout} alt="Bootcamp-Image" />
        </div>
        <div className="class-text">
          <p>Join our WÖRKOUT family, fill out our QUIZ to get a ahead of your journey!</p>
          <Button
            color="Darkgreen"
            text="contact"
            onClick={onClickToContact}
            aria-label="button to take quiz for program search" />
        </div>
      </div>
    </div>
  )
}