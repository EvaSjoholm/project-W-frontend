import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from 'components/Navbar/NavBar'
import { Header } from 'components/Header'
import { StartPage } from 'components/StartPage'

import { Quiz } from 'components/Quiz/Quiz'
import { Contact } from 'components/ContactForm/Contact'
import { Footer } from 'components/Footer/Footer'
import { Why } from 'components/Why/Why'

export const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Header />
      <Why />
      <Routes>
        <Route path="/" element={<StartPage title="Join the fam!" />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Contact" element={<Contact title="Get contacted" />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
