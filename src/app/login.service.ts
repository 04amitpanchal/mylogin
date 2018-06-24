import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { LoginComponent } from "../app/login/login.component";
import { l } from './login/loginclass';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string='http://localhost:3000/login1/';
  urln:string='http://localhost:3000/login/';
  constructor(public _http:HttpClient) {

  }
getAlldata(){
  return this._http.get(this.urln);
}
getBbyid(id){
  return this._http.get(this.urln+id);
}
  getByiddata(item:l){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:h});
  }
  updatedata(item:l){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.urln+item.email_id,body,{headers:h});

  }
  addAlldata(item:l){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.urln,body,{headers:h});
  }
  changepasss(item:l){
    // alert(item.email_id  +' ' + item.password);
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.email_id,body,{headers:h});
  }
}
