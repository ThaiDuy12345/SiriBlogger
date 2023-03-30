import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Signin from '../components/Signin'
import MainBody from '../components/MainBody'
export default function Body() {
  return (
    <Routes>
      <Route path="*" element={<MainBody/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signin" element={<Signin/>} />
    </Routes>
  )
}
