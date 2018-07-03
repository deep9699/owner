import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { admin } from './admin_class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminurl="http://localhost:3000/admin/";
  constructor(private _http:HttpClient) { }

  adminLogin(item:admin)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.adminurl,body,{headers:head1});
  }

}
