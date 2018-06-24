import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../login.service";
import { ActivatedRoute,Router } from "@angular/router";
import { l } from '../loginclass';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  id:string;
  e_id:string;
  e_pass:string;
  u_name:string;
  m_no:string;
  city:string;
  gender:string;
  address:string;
  constructor(private _aroute:ActivatedRoute,private _route:Router,private _xyz:LoginService) { }
  arr:l[]=[

  ];
  ngOnInit() {
  //  this.id=this._aroute.snapshot['id'];
    this._xyz.getAlldata().subscribe(
      (data:l[])=>
      {
        console.log(data);
        this.arr=data;
        // this.e_id=data[0].email_id;
        // this.e_pass=data[0].password;
        // this.u_name=data[0].user_name;
        // this.m_no=data[0].mobileno;
        // this.city=data[0].city;
        // this.gender=data[0].gender;
        // this.address=data[0].address;
      }
    );
  }
  onsignup(){
    this._xyz.addAlldata(new l(this.e_id,this.e_pass,this.u_name,this.m_no,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr.push(new l(this.e_id,this.e_pass,this.u_name,this.m_no,this.city,this.gender,this.address));
      }
    );
    this._route.navigate(['']);
    alert('!!!!!!!Accout created sucessfully!!!!!!!');
  }

}
