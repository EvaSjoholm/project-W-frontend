import React from 'react';
import styled from 'styled-components/macro';
import workoutLogo from 'assets/workoutLogo.png';
import IconImg from 'assets/menu-icon.png';

const WorkoutLogo = styled.img`
display: flex;
border: 1px solid green;

@media (min-width: 366px) {
display: flex;
align-items: center;
height: 40%;
width: 80px;

 @media (min-width: 668px) {
display: flex;
align-items: center;
height: 50%;
width: 108px;

@media (min-width: 1024px) {
  align-items: center;
    padding: 0;
    height: 60%;
    width: 108px;
  }
 }
}
`
const Icon = styled.img`
display: flex;
align-items: center;
height: 40px;
width: 40px;

@media (min-width: 366px) {
display: flex;
align-items: center;
width: 20px;
height: 20px;
}

@media (min-width: 668px) {
display: flex;
align-items: center;
width: 40px;
height: 40px;
}
`

export const NavBar = () => {
  return (
    <div className="navbar">
      <Icon
        src={IconImg}
        alt="menu" />

      <WorkoutLogo
        src={workoutLogo}
        alt="" />
    </div>
  )
}