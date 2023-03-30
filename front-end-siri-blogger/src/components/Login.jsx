import React from 'react'

export default function Login() {
  return (
    <div className="Login w-50 m-auto center" style={{height: '100vh'}}>
      <div className="row m-0 p-0">
        <div className="col-12 row m-0 mb-4 p-0">
          <b className="col m-auto center" style={{fontSize:'30px'}}>SiriBlogger</b>
        </div>
        <div className="col-12 row m-0 mb-4 p-0">
          <input className="form-control col-8 m-auto mb-2" type="text" placeholder="Tên đăng nhập hoặc email"/>
          <input className="form-control col-8 m-auto mb-2" type="password" placeholder="Mật khẩu"/>
        </div>
        <div className="col-12 row m-0 mb-4 p-0">
          <button className="btn btn-success col-12 m-auto font-weight-bold">Đăng nhập</button>
        </div>
        <div className="col-12 row m-0 mb-4 p-0">
          <a href="/forgot" className="text-primary col-6 m-auto" style={{textAlign:'left'}}>Quên mật khẩu</a><a href="/signin" className="col-6 m-auto text-primary" style={{textAlign:'right'}}>Chưa có tài khoản? Đăng ký ngay</a>
        </div>
      </div>
    </div>
  )
}
