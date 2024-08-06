import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import RegistrationPage from './components/RegistrationPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App