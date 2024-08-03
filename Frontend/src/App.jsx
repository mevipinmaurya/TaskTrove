import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App