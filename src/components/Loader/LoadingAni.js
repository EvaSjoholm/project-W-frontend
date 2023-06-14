import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export const LoadingAni = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets4.lottiefiles.com/packages/lf20_wdetpydn.json"
      style={{ height: '100px', width: '100px' }} />
  )
}