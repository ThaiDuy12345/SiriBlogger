import React, { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from 'axios'
import api from '../API/api'
import regex from '../regex/regex'
export default function Signin() {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    name: "",
    dateOfBirth: "",
    phone: "",
    gender: "", 
    avatar: "",
  })
  const [imgSrc, setImgSrc] = useState("")
  const [page, setPage] = useState(1)
  const email = useRef()
  const password = useRef()
  const name = useRef()
  const dateOfBirth = useRef()
  const gender = useRef()
  const phone = useRef()
  const img = useRef()
  const SigninAccount = () => { 

  }
  const loadImage = () => {
    if (img.current && img.current.files && img.current.files[0]) {
      const formData = new FormData()
      formData.append('file', img.current.files[0])
      formData.append('name', img.current.files[0].name)
      axios.post(api.saveAnImage, formData, {
        headers: {
          'Content-Type': "multipart/form-data"
        }
      }).then(res => {
        setImgSrc(`${api.getAnImage}${res.data.name}`)
        alert("Tải ảnh thành công")
      }).catch(err => {
        console.error(err)
        alert("Tải ảnh thất bại!! F12 để biết thêm chi tiết")
      })
    }
  }
  const Page1 = () => {
    return (
      <>
        <div className="col-12 row m-0 mb-4 p-0">
          <input
            ref={email}
            className="form-control col-12 m-auto mb-2"
            type="text"
            placeholder="Tên đăng nhập hoặc email"
          />
          <input
            ref={password}
            className="form-control col-12 m-auto mb-2"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="col-12 row m-0 mb-4 p-0">
            <button
              onClick={() => {
                if(!(regex.email.test(email.current.value) && regex.password.test(password.current.value))){
                  alert("Email hoặc mật khẩu sai định dạng, vui lòng nhập lại!!\n- Email cần đúng định dạng\n- Mật khẩu tối thiểu 8 chữ cái(Bao gồm số và chữ, ít nhất 1 chữ, 1 chữ in hoa, 1 số)")
                  return
                }
                setAccount({
                  email: email.current.value,
                  password: password.current.value,
                })
                setPage(2)
              }}
              className="bg-primary text-light pt-2 pb-2 rounded col-12 fw-bold"
              style={{ border: "none", background: "none" }}
            >
              Tiếp tục
            </button>
        </div>
      </>
    )
  }
  const Page2 = () => {
    return (
      <>
        <div className="col-12 row m-0 mb-4 p-0">
          <div className="text-start col-12 m-auto mb-1 text-secondary fw-bold">
            Thông tin đăng nhập
          </div>
          <input
            disabled
            value={account.email}
            className="form-control col-12 m-auto mb-2"
            type="text"
            placeholder="Tên đăng nhập hoặc email"
          />
          <input
            disabled
            value={account.password}
            className="form-control col-12 m-auto mb-2"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="col-12 row m-0 mb-4 p-0">
          <div className="text-start col-12 m-auto mb-1 text-secondary fw-bold">
            Thông tin chi tiết
          </div>
          <input
            ref={name}
            className="form-control m-auto mb-2"
            type="text"
            placeholder="Họ tên đầy đủ của bạn"
          />
          <input
            ref={phone}
            className="form-control m-auto mb-2"
            minLength="10"
            maxLength="11"
            type="number"
            placeholder="Số điện thoại"
          />
          <div className="col-5 p-0 me-auto mb-2">
            <select
              className="form-select text-secondary"
              ref={gender}
              aria-label=".form-select-sm example"
            >
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
              <option value="3">Khác</option>
            </select>
          </div>
          <div className="col-5 p-0 ms-auto mb-2">
            <input
              name="date of birth"
              ref={dateOfBirth}
              className="form-control text-secondary"
              type="date"
              placeholder="Ngày sinh"
            />
          </div>
        </div>
        <div className="col-12 row m-0 mb-4 p-0">
            <button
              onClick={() => {
                if(gender.current.value === "" || dateOfBirth.current.value === "" || name.current.value === "" || phone.current.value === ""){
                  alert("Bạn cần điền hết tất cả thông tin")
                  return
                }
                setAccount({
                  email: account.email,
                  password: account.password,
                  gender: gender.current.value,
                  dateOfBirth: dateOfBirth.current.value,
                  name: name.current.value,
                  phone: phone.current.value,
                })
                setPage(3)
              }}
              className="bg-primary text-light pt-2 pb-2 rounded col-12 fw-bold"
              style={{ border: "none", background: "none" }}
            >
              Tiếp tục
            </button>
        </div>
      </>
    )
  }
  const Page3 = () => {
    let sectionStyle = {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url('${imgSrc}')`,
      border:"0.5px solid gray"
    };
    return (
      <>
        <div className="col-4 row m-0 me-auto p-0">
          <div style={sectionStyle} alt="" className="col-12 mt-2 rounded"></div>
          <input ref={img} onChange={loadImage} className="mb-auto mt-1 form-control" type="file"/>
        </div>
        <div className="row col-6 m-0 ms-auto p-0">
          <div className="col-12 row m-0 mb-4 p-0">
            <div className="text-start col-12 m-auto mb-1 text-secondary fw-bold">
              Thông tin đăng nhập
            </div>
            <input
              disabled
              value={account.email}
              className="form-control col-12 m-auto mb-2"
              type="text"
              placeholder="Tên đăng nhập hoặc email"
            />
            <input
              disabled
              value={account.password}
              className="form-control col-12 m-auto mb-2"
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="col-12 row m-0 mb-4 p-0">
            <div className="text-start col-12 m-auto mb-1 text-secondary fw-bold">
              Thông tin chi tiết
            </div>
            <input
              disabled
              name="name"
              value={account.name}
              className="form-control m-auto mb-2"
              type="text"
              placeholder="Họ tên đầy đủ của bạn"
            />
            <input
              disabled
              name="phone"
              value={account.phone}
              className="form-control m-auto mb-2"
              type="number"
              placeholder="Số điện thoại"
            />
            <div className="col-5 p-0 me-auto mb-2">
              <select
                name="gender"
                disabled
                value={account.gender}
                className="form-select text-secondary"
                aria-label=".form-select-sm example"
              >
                <option value="0">Giới tính</option>
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="3">Khác</option>
              </select>
            </div>
            <div className="col-5 p-0 ms-auto mb-2">
              <input
                disabled
                name="date of birth"
                value={account.dateOfBirth}
                className="form-control text-secondary"
                type="date"
                placeholder="Ngày sinh"
              />
            </div>
          </div>
          <div className="col-12 row m-0 mb-4 p-0">
            <div className="col-6 m-0"></div>
            <div className="col-6 p-0 m-0">
              <button
                onClick={() =>
                  setAccount({
                    email: email.current.value,
                    password: password.current.value,
                  })
                }
                className="text-primary fw-bold"
                style={{ border: "none", background: "none" }}
              >
                Tiếp tục
              </button>
              <FontAwesomeIcon
                icon="fa-solid fa-right-long"
                className="text-primary"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="Signin w-50 m-auto center" style={{ height: "100vh" }}>
      <div className="row m-0 p-0">
        <div className="col-12 row m-0 mb-4 p-0">
          <b
            className="col m-auto center"
            style={{ fontSize: "30px" }}
          >
            SiriBlogger
          </b>
        </div>
        {page === 1 ? <Page1 /> : page === 2 ? <Page2 /> : <Page3 />}
      </div>
    </div>
  )
  // <div className="col-12 row m-0 mb-4 p-0">
  //         <button onClick={() => {
  //             setAccount({
  //               email: email.current.value,
  //               password: password.current.value,
  //               name: name.current.value,
  //               gender: gender.current.value,
  //               dateOfBirth: dateOfBirth.current.value
  //             })
  //             SigninAccount()
  //           }
  //         }className="btn btn-success fw-bold">Đăng ký tài khoản</button>
  //       </div>
}
