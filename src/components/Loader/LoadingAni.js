import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import './Loading.css'

export const LoadingAni = () => {
  const navigate = useNavigate()

  return (
    <div className="ani-container">
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_wdetpydn.json"
        style={{ height: '100px', width: '100px' }} />
      <Button text="HOME" onClick={() => { navigate('/') }} />
      <hr />
    </div>
  )
}