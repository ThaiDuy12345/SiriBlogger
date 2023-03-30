import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import service from 'src/app/toolAndData/service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent {
  constructor(private http: HttpClient){}
  async ngOnInit() {
    if(await new service(this.http).checkAccountIfValidate(sessionStorage.getItem('SBAccount')) === true){
      window.location.href = "http://localhost:4200/"
    }
  }
}
