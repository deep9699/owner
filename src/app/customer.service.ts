import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { customer } from './customer_class';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private loginurl:string="http://localhost:3000/customer/";
  private signupurl:string="http://localhost:3000/customer1/";
  constructor(private _http:HttpClient) { }
  getCustomerByLogin(item:customer)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.loginurl,body,{headers:head1});
  }

  getCustomerById(id:string)  
  {
    return this._http.get(this.loginurl+id);
  }

  insertCustomer(item:customer)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.signupurl,body,{headers:head1});
  }
  updateCustomer(item:customer)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.loginurl,body,{headers:head1});
  }

  updatepassword(item:customer)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.signupurl,body,{headers:head1});
  }

}
