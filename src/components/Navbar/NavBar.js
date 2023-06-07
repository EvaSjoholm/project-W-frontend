import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">WÖRKOUT</Link>
      <ul>
        <li className="active">
          <Link to="/Quiz">Wörkout quiz</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
