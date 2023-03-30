import React from 'react'
import { Routes, Route } from 'react-router-dom'
export default function Footer() {
  function FooterRender(){
    return(
      <div className="Footer w-100 m-0 p-0 row border-top">
        <div className="col-11 row m-auto p-0">
          <div className="col-12 m-auto row p-0">
            <div className="text-start col-lg-8 col-md-8 col-sm-12 fs-2 fw-bold">
              SiriBlogger
            </div>
            <div className="row m-auto p-0 col-lg-4 col-md-4 col-sm-12 fs-5">
              <a href="#d" className="col text-start text-secondary" style={{textDecoration:'none', fontSize:'14px'}}>Về chúng tôi</a>
              <a href="#d" className="col text-start text-secondary" style={{textDecoration:'none', fontSize:'14px'}}>Điều khoản</a>
              <a href="#d" className="col text-start text-secondary" style={{textDecoration:'none', fontSize:'14px'}}>Báo cáo</a>
            </div>
          </div>
          <hr className="col-12"/>
          <div className="col-12 m-auto p-0 row">
            <div className="col-lg-8 col-md-8 col-sm-12 row m-auto p-0" style={{fontSize:'12px'}}>
              <div className="col-12">
                Người chịu trách nhiệm nội dung: Nguyễn Ngọc Thái Duy
              </div>
              <div className="col-12">
                Giấy phép MXH số 341/GP-TTTT do Bộ TTTT cấp ngày 27 tháng 6 năm 2016
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 row m-auto p-0" style={{fontSize:'12px'}}>
              <div className="col-12">
                © Copyright 2022-2030
              </div>
              <div className="col-12">
                0912571469
              </div>
              <div className="col-12">
                nguyenngocthaiduy.nt@gmail.com
              </div>
              <div className="col-12">
                443/18 Lê Văn Sỹ, Phường 12, Quận 3, TP Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<FooterRender/>}/>
      <Route path="/login" element={null}/>
      <Route path="/signin" element={null}/>
    </Routes>
  )
}
