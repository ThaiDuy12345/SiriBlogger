import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import regex from 'src/app/toolAndData/regex';
import api from '../../toolAndData/API'
@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.scss']
})
export class BodyLoginComponent {
  constructor(private http: HttpClient){}
  email = ""
  password = ""

  submit = async (): Promise<void> => {
    try{
      if(regex.email.test(this.email) && regex.password.test(this.password)){
        let response: any = await this.http.post(`${api.getAnAccountByEmailAndPassword}`, {
          email: this.email,
          password: this.password
        }).toPromise()
        if(response === null){
          alert("Email và mật khẩu không đúng, xin vui lòng nhập lại")
        }else{
          sessionStorage.setItem("SBAccount", response._id)
          window.location.href = "http://localhost:4200/"
        }
      }else{
        alert("Email và mật khẩu không đúng, xin vui lòng nhập lại")
      }
    }catch(err) {
      alert("Đăng nhập thất bại, xin vui lòng thử lại")
      console.log(err)
    }
  }
}
