import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from "../loginfrontend/src/app/login/login.component";
import { NewuserComponent } from "../loginfrontend/src/app/login/newuser/newuser.component";
import { ForgotpasswordComponent } from "../loginfrontend/src/app/login/forgotpassword/forgotpassword.component";
import { ViewprofileComponent } from "../loginfrontend/src/app/login/viewprofile/viewprofile.component";
import { EditprofileComponent } from "../loginfrontend/src/app/login/editprofile/editprofile.component";
import { ForgotComponent } from "../loginfrontend/src/app/login/forgot/forgot.component";
const arr:Routes=[
  {path:'',component:LoginComponent},
  // {path:'/login',component:LoginComponent},
  // {path:'newuser',component:NewuserComponent},
  {path:'newuser',component:NewuserComponent},
  // {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'forgot',component:ForgotComponent}
];

export const routing=RouterModule.forRoot(arr);
