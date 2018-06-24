import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../login.service";
import { ActivatedRoute,Router } from "@angular/router";
import { l } from '../loginclass';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  e_id:string;
  e_npass:string;
  id:string;
  constructor(public _aroute:ActivatedRoute,private _route:Router,private _xyz:LoginService) { }

  ngOnInit() {
    // this.id=this._aroute.snapshot.params['id'];
    this.id=localStorage.getItem('id');
    this._xyz.getBbyid(this.id).subscribe(
      (data:l[])=>{
        console.log(data);
        this.e_id=data[0].email_id;
      }
    );
  }
  changepassword(){
    this._xyz.changepasss(new l(this.e_id,this.e_npass)).subscribe(

      (data:any)=>{
          console.log(data);
          alert('password changed sucessfully');
      }
    );
    this._route.navigate(['']);
  }
}
