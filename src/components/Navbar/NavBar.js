import React from 'react'

export const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">WÖRKOUT</a>
      <ul>
        <li className="active">
          <a href="/Quiz">Wörkout quiz</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}