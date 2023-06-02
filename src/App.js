import React from 'react'
import { NavBar } from 'NavBar'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'

export const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <StartPage title="Wörkout Quiz" />
    </>
  )
}
