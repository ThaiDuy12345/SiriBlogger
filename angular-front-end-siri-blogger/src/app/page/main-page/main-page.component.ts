import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import service from 'src/app/toolAndData/service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private http: HttpClient){}

  ngOnInit(){
    
  }

}
