import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import RegistrationPage from './components/RegistrationPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    // console.log(authToken)
    if (authToken === null) {
      navigate("/register");
    }
  }, [])
  return (
    <>
      <ToastContainer />
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