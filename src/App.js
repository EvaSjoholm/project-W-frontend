import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from 'components/Navbar/NavBar'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'
import { Quiz } from 'components/Quiz/Quiz'

export const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<StartPage title="Wörkout Quiz" />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>

  )
}
