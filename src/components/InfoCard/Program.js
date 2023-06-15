/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
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
    navigate('/quizzes')
  }
  return (
    <div className="program-container">
      <h3 className="card-title">
        be a beautiful cupcake in a world full of muffins
      </h3>
      <hr className="first-line" />
      <div className="class-section">
        <div className="class-card">
          <div className="class-img">
            <img src={BlackImg} alt="Bootcamp-Image" />
          </div>
          <div className="class-text">
            <p>Striving to educate and help people find their fitness path through mind, body and soul</p>
            <Button
              color="Army Green"
              text="QUIZ"
              onClick={onClickToQuiz}
              aria-label="button to take quiz for program search" />
          </div>
        </div>
        <div className="class-card">
          <div className="class-img">
            <img src={ShirtImg} alt="Bootcamp-Image" />
          </div>
          <div className="class-text">
            <p>Liking our merch? We got plenty! Hit the contact-button and we will send you an email!</p>
            <Button
              color="Armygreen"
              text="CONTACT"
              onClick={onClickToContact}
              aria-label="button to take quiz for program search" />
          </div>
        </div>
      </div>
    </div>
  )
}