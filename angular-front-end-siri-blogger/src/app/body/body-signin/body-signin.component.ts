import { Component } from '@angular/core';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import regex from '../../toolAndData/regex'
import api from '../../toolAndData/API'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-body-signin',
  templateUrl: './body-signin.component.html',
  styleUrls: ['./body-signin.component.scss']
})
export class BodySigninComponent {
  faRightLong = faRightLong
  step = 0
  imgSrc = {}
  constructor(private http: HttpClient){}

  acc: account = {
    email: "",
    password: "",
    name: "",
    dateOfBirth: "",
    phone: "",
    gender: "1",
    avatar: "",
  }

  checkValidate = (): void => {
    if(this.step === 0){
      if(regex.email.test(this.acc.email) && regex.password.test(this.acc.password)){
        this.step++
      }else{
        alert("Email hoặc mật khẩu không hợp lệ\n- Email cần đúng định dạng\n- Mật khẩu tối thiểu 8 chữ cái(Bao gồm số và chữ, ít nhất 1 chữ, 1 chữ in hoa, 1 số)")
      }
    }else if(this.step === 1){
      if(this.acc.gender === "" || this.acc.dateOfBirth === "" || this.acc.name === "" || this.acc.phone === ""){
        alert("Bạn cần điền hết tất cả thông tin")
      }else{
        this.step++
      }
    }else{
      if(this.acc.avatar === ""){
        alert("Bạn cần chọn hình ảnh đại diện cho tài khoản của bạn!!")
      }else{
        this.submit()
      }
    }
  }

  loadImage = async (event: Event): Promise<void> => {
    const formData = new FormData();
    const file = event.target as HTMLInputElement
    if(file.files && file.files.length > 0){
      formData.append('file', file.files[0]);
      formData.append('name', file.files[0].name);
      try{
        let response: any = await this.http.post(api.saveAnImage, formData).toPromise()
        alert("Tải ảnh thành công")
        this.imgSrc = {
          'background-image': `url('${api.getAnImage}${response.name}')`,
          'background-position': 'center',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'border': "0.5px solid gray"
        }
        this.acc.avatar = response.name
      }catch(err){
        alert("Tải ảnh thất bại")
        console.log(err)
      }
    }
  }


  submit = async (): Promise<void> => {
    try{
      let response: any = await this.http.post(api.createAnAccount, this.acc).toPromise()
      if(response === null){
        alert("Tạo tài khoản thất bại")
      }else{
        alert("Tạo tài khoản thành công")
        sessionStorage.setItem("SBAccount", response._id)
        window.location.href = "http://localhost:4200/"
      }
    }catch(err) {
      console.log(err)
    }
  }
}

type account = {
  email: string,
  password: string,
  name: string,
  dateOfBirth: string,
  phone: string,
  gender: string,
  avatar: string,
}


