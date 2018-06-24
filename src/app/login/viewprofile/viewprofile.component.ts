import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { LoginService } from "../../login.service";
import { l } from '../loginclass';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  id:string;
  e_id:string;
  e_pass:string;
  u_name:string;
  m_no:string;
  city:string;
  gender:string;
  address:string;
  constructor(public _aroute:ActivatedRoute,private _route:Router,private _xyz:LoginService) { }

  ngOnInit() {
    //this.id=this._aroute.snapshot.params['id'];
    // alert(this.id);
this.id=localStorage.getItem('id');
    this._xyz.getBbyid(this.id).subscribe(
      (data:l[])=>{
        console.log(data);
        this.e_id=data[0].email_id;
        this.e_pass=data[0].password;
        this.u_name=data[0].user_name;
        this.m_no=data[0].mobileno;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;
      }
    );
  }
onedit(){
  localStorage.setItem('id',this.e_id);
  this._route.navigate(['/editprofile']);
}
onforgot(){
  localStorage.setItem('id',this.e_id);
  this._route.navigate(['/forgotpassword']);
}
onlogout(){
  this._route.navigate(['']);
}
}
