import React from 'react'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Register from '../views/Register/Register'
import Login from '../views/Login/Login'
import Protected from '../components/Protected/Protected'
import MainLayout from '../components/MainLayout/MainLayout'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<Protected><MainLayout/></Protected>} />
      </Routes>
    </Router>
  )
}

export default AppRouter
