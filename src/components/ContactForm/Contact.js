import React, { useState } from 'react'
import './ContactForm.css'
import { Button } from '../Button'

export const Contact = () => {
  const [submit, setSubmit] = useState(false)

  const handleSubmit = () => {
    setSubmit(true)
  }

  return (
    <div className="contact">
      {submit ? <p>Thank you!</p> : (

        <form className="contactform">
          <h3>GET CONTACTED</h3>
          <label htmlFor="name"><span>Name</span>
            <br />
            <input type="text" id="name" name="name" className="inputfield" placeholder="First Lastname" />
          </label>

          <label htmlFor="email"><span>Email</span>
            <br />
            <input type="email" id="email" name="email" className="inputfield" placeholder="example@email.com" />
          </label>

          <Button color="Grey" text="Submit" onClick={handleSubmit} />
        </form>
      )}
    </div>

  )
}