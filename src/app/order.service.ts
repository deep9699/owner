import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from './product_class';
import { category } from './category_class';
import { order } from './order_class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderurl="http://localhost:3000/order/";
  private orderurl1="http://localhost:3000/order1/";
  constructor(private _http:HttpClient) { }
  BuyProduct(qty:number,item:product)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   return this._http.put(this.orderurl+qty,body,{headers:head1});
  }

  addOrder(item:order)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.orderurl,body,{headers:head1});
  }

  getOrderByPid(id)
  {
    return this._http.get(this.orderurl+id);
  }

  getPendingOrder()
  {
    return this._http.get(this.orderurl);
  }
  getDoneOrder()
  {
    return this._http.get(this.orderurl1);
  }
  updateStatus(item:order)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.orderurl,body,{headers:head1});
  }
 
}
