/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import BlackImg from 'assets/blackandwhite.webp'
import ShirtImg from 'assets/tisha.webp'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import './Card.css'

export const Program = () => {
  const navigate = useNavigate();

  const onClickToContact = () => {
    navigate('/contact')
  }
  const onClickToQuiz = () => {
    navigate('/Quiz')
  }
  return (
    <div className="program-container">
      <div className="program-title">
        Take our quiz and we will find your program!
      </div>
      <div className="class-section">
        <div className="class-card">
          <div className="class-img">
            <img src={BlackImg} alt="Bootcamp-Image" />
          </div>
          <div className="class-text">
            <p>Join our WÖRKOUT family, fill out our QUIZ to get a ahead of your journey!</p>
            <Button
              color="Army Green"
              text="contact"
              onClick={onClickToQuiz}
              aria-label="button to take quiz for program search" />
          </div>
        </div>
        <div className="class-card">
          <div className="class-img">
            <img src={ShirtImg} alt="Bootcamp-Image" />
          </div>
          <div className="class-text">
            <p>Join the fam and get a WÖRKOUT t-shirt for free!</p>
            <Button
              color="Armygreen"
              text="contact"
              onClick={onClickToContact}
              aria-label="button to take quiz for program search" />
          </div>
        </div>
      </div>
    </div>
  )
}