import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Header() {
  function HeaderRender(){
    return (
      <div className="fixed-top header w-100 text-dark m-0 p-0 row">
        <div className="col-4 row p-0 m-0">
          <div className="col-6 p-0 m-0 center" style={{fontSize:"25px", fontWeight:'bold'}}>SiriBlogger</div>
          <div className="col-6 p-0 m-0 row">
            <div className="col p-0 m-0 center"><FontAwesomeIcon icon="fa-brands fa-facebook"/></div>
            <div className="col p-0 m-0 center"><FontAwesomeIcon icon="fa-brands fa-twitter"/></div>
            <div className="col p-0 m-0 center"><FontAwesomeIcon icon="fa-brands fa-youtube"/></div>
            <div className="col p-0 m-0 center"><FontAwesomeIcon icon="fa-brands fa-paypal"/></div>
            <div className="col p-0 m-0 center"><a href="#searchBar" className="text-dark" ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></a> </div>
          </div>
        </div>
        <div className="col-8 row p-0 m-0">
          <div className="col-7 row m-0 p-0">
            
          </div>
          <div className="col-5 row">
            <button onClick={() => {window.location.href = "/signin"}} className="col-5 m-auto text-dark" style={{border:'none', background:'none'}}>Đăng ký</button>
            <button onClick={() => {window.location.href = "/login"}} className="btn btn-primary m-auto col-5">Đăng nhập</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<HeaderRender/>}/>
      <Route path="/login" element={null}/>
      <Route path="/signin" element={null}/>
    </Routes>
  )
}
