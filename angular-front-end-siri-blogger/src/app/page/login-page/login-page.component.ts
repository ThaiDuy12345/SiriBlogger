import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import service from 'src/app/toolAndData/service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private http: HttpClient){}
  async ngOnInit() {
    if(await new service(this.http).checkAccountIfValidate(sessionStorage.getItem('SBAccount')) === true){
      window.location.href = "http://localhost:4200/"
    }
  }
}
