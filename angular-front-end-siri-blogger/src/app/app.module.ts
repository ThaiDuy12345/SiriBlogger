import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BodyMainComponent } from './body/body-main/body-main.component';
import { BodySigninComponent } from './body/body-signin/body-signin.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { BodyLoginComponent } from './body/body-login/body-login.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { SigninPageComponent } from './page/signin-page/signin-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "signin",
    component: SigninPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    BodyMainComponent,
    BodySigninComponent,
    BodyLoginComponent,
    FooterMainComponent,
    LoginPageComponent,
    MainPageComponent,
    SigninPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
