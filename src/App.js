import React from 'react'
import { NavBar } from 'NavBar'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { Quiz } from 'components/Quiz/Quiz'

export const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <StartPage title="Wörkout Quiz" />
      <Quiz />
    </>
  )
}
