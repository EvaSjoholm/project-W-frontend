import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/workoutLogo.png'

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="workout-logo" height="40px" width="150px" />
      </Link>
      <ul>
        <li className="quiz">
          <Link to="/Quiz">TAKE QUIZ</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/program">PROGRAM</Link>
        </li>
      </ul>
    </nav>
  )
}
