import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import { routing } from "../../app.route";
import { NewuserComponent } from './login/newuser/newuser.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ViewprofileComponent } from './login/viewprofile/viewprofile.component';
import { EditprofileComponent } from './login/editprofile/editprofile.component';
import { ForgotComponent } from './login/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewuserComponent,
    ForgotpasswordComponent,
    ViewprofileComponent,
    EditprofileComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
