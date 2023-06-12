import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from 'components/Navbar/NavBar'
import { StartPage } from 'components/StartPage'

import { Quizzes } from 'components/Quiz/Quizzes'
import { Contact } from 'components/ContactForm/Contact'
import { Footer } from 'components/Footer/Footer'
import { Program } from './components/InfoCard/Program'

export const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<StartPage title="Join the fam!" />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/Contact" element={<Contact title="Get contacted" />} />
        <Route path="/program" element={<Program />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
