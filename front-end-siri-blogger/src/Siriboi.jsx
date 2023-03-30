import React from 'react'
import Header from './layout/Header'
import Body from './layout/Body'
import Footer from './layout/Footer'
import { BrowserRouter } from 'react-router-dom'
export default function Siriboi() {
  return (
    <BrowserRouter>
      <Header/>
      <Body/>
      <Footer/>
    </BrowserRouter>
  )
}
