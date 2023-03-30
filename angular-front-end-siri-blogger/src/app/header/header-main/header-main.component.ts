import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faPaypal,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import api from 'src/app/toolAndData/API';
@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent {
  constructor(private http: HttpClient){}
  faFacebook = faFacebook
  faTwitter = faTwitter
  faPaypal = faPaypal
  faYoutube = faYoutube
  faMagnifyingGlass = faMagnifyingGlass
  acc: account = {
    email: "",
    name: "",
    avatar: ""
  }
  checkIfLogin = (): Boolean => {
    if(sessionStorage.getItem("SBAccount") === null || sessionStorage.getItem("SBAccount") === undefined) {
      return true;
    }
    return false;
  }
  logOut = (): void => {
    sessionStorage.removeItem("SBAccount")
    alert("Thành công")
  }
  async ngOnInit(): Promise<void> {
    try{
      let response: any = await this.http.get(`${api.getAnAccountById}${sessionStorage.getItem("SBAccount")}`).toPromise()
      this.acc = {
        email: response.email,
        name: response.name,
        avatar: `${api.getAnImage}${response.avatar}`
      }
    }catch(err){
      console.log(err)
    }

  }

}
type account = {
  email: string,
  name: string,
  avatar: string,
}
