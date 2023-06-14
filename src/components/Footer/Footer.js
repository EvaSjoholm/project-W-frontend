import React from 'react'
import InstaIcon from 'assets/instaIcon.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="iconfield">
        <img src={InstaIcon} alt="instaIcon" height="30px" />
      </div>
    </div>
  )
}
