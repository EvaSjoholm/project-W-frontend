import React from 'react'
import './ContactForm.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'

export const Contact = () => {
  const navigate = useNavigate();

  const onClickToStartPage = () => {
    navigate('/StartPage')
  }

  return (
    <div className="contact">
      <form className="contactform">
        <h3>Contact form</h3>
        <label htmlFor="name"><span>Name</span>
          <br />
          <input type="text" id="name" name="name" className="inputfield" placeholder="First Lastname" />
        </label>

        <label htmlFor="email"><span>Email</span>
          <br />
          <input type="email" id="email" name="email" className="inputfield" placeholder="example@email.com" />
        </label>

        <Button color="Green" text="home" onClick={onClickToStartPage} />
      </form>
    </div>

  )
}