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
  return (
    <div className="class-container">
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
              onClick={onClickToContact}
              aria-label="button to take quiz for program search" />
          </div>
        </div>
        <div className="class-card">
          <div className="class-img">
            <img src={ShirtImg} alt="Bootcamp-Image" />
          </div>
          <div className="class-text">
            <p>Let us build strong minds and body as a team!</p>
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