import React from 'react';
import blackImg from 'assets/blackandwhite.webp'

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-img">
          <img src={blackImg} alt="header-img" height="80%" width="80%" />
        </div>
        <div className="header-text">
          <h1> The Wörkout Effect</h1>
          <p>Move like water my friend</p>
        </div>
      </div>
    </div>
  )
}