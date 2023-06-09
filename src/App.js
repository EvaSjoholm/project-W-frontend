import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from 'components/Navbar/NavBar'
import { StartPage } from 'components/StartPage'

import { Quizzes } from 'components/Quiz/Quizzes'
import { Contact } from 'components/ContactForm/Contact'
import { Footer } from 'components/Footer/Footer'
import { NotFound } from 'components/Loader/NotFound'
import { Program } from './components/InfoCard/Program'

import './index.css'

export const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/Contact" element={<Contact title="Get contacted" />} />
        <Route path="/program" element={<Program />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
