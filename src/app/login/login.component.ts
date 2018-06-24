import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../app/login.service";
import { l } from './loginclass';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  e_id:string;
  pass:string;
  id:string;
  arr:l[]=[

  ];
  constructor(private _xyz:LoginService,private _route:Router) { }

  ngOnInit() {

    this._xyz.getAlldata().subscribe(
      (data:l[])=>
      {
          console.log(data);
          this.arr=data;
          // alert(this.arr[0]);
          // this.e_id=data[0].email_id;
          // this.id=this.e_id;
          // this.e_id='';

      }
    );
  }
onlogin(){
  this._xyz.getByiddata(new l(this.e_id,this.pass)).subscribe(
    (data:any)=>
    {

        console.log(data);
        this.arr=data;
      if (data.length==1) {
        localStorage.setItem('id',this.e_id);
        this._route.navigate(['/viewprofile']);
      }
      else
      {
        alert('email id and password is not match please enter valid one');
        this.e_id='';
        this.pass='';
      }
    }
  );

}
onnewuser(item:l){
  this._route.navigate(['/newuser']);

}
onforgotpasasword(item:l){
  if(this.e_id==null){
      alert('please enter your email_id');
  }
  else
  {
    localStorage.setItem('id',this.e_id);
    this._route.navigate(['/forgot']);
  }
}
}
