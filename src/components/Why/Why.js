import React from 'react';
import './Why.css';

import DbIcon from 'assets/DBicon.png'
import foodIcon from 'assets/foodicon.png'
import groupIcon from 'assets/groupicon.png'

export const Why = () => {
  return (
    <div className="Why">
      <div className="why-box">
        <h2>READY?</h2>
        <div className="icon-container">
          <ul className="icon-list-item">
            <li className="icon-list-icon">
              <img src={DbIcon} alt="Db-icon" height="40px" width="40px" />
              <span className="icon-text">
                <p> Here comes text</p>
              </span>
            </li>

            <li className="icon-list-icon">
              <img src={foodIcon} alt="food-icon" height="40px" width="40px" />
              <p> Here comes text</p>
            </li>

            <li className="icon-list-icon">
              <img src={groupIcon} alt="group-icon" height="40px" width="40px" />
              <p> Here comes text</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

