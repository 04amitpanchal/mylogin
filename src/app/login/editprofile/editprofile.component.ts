import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from "../../login.service";
import { ActivatedRoute,Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { l } from '../loginclass';
import { text } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  id:string;
  e_id:string;
  e_pass:string;
  u_name:string;
  m_no:string;
  city:string;
  gender:string;
  address:string;
  arr:l[]=[

  ];
  constructor(public _aroute:ActivatedRoute,private _route:Router,private _xyz:LoginService) { }

  ngOnInit() {
    // this.id=this._aroute.snapshot.params['id'];
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
  this._xyz.updatedata(new l(this.e_id,this.e_pass,this.u_name,this.m_no,this.city,this.gender,this.address)).subscribe(
    (data:any)=>{
      console.log(data);
      this.arr.push(new l(this.e_id,this.e_pass,this.u_name,this.m_no,this.city,this.gender,this.address));
    }
  );
  alert('Edit profile sucessfully');
  this._route.navigate(['/viewprofile']);

}


}
