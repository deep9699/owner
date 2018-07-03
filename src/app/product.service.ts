import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from './product_class';
import { category } from './category_class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private producturl:string="http://localhost:3000/product/";
  private category_producturl:string="http://localhost:3000/category_product/";
  private product_adminurl:string="http://localhost:3000/product_admin";

  constructor(private _http:HttpClient) { }

  getAllProduct()
  {
   return this._http.get(this.producturl);
  }

  getProductByCatName(cat_name:string)
  {
   return this._http.get(this.category_producturl+cat_name);
  }

  getProductById(p_id:number)
  {
    return this._http.get(this.producturl+p_id);
  }

  getProductByCatId(c_id:number,p_id:number)
  {
    return this._http.get(this.category_producturl+c_id+'/'+p_id);
  }

  getLowQuantityProduct()
  {
    return this._http.get(this.product_adminurl);
  }

  addProduct(item:product)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.producturl,body,{headers:head1});
  }

  updateProduct(item:product)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
     return this._http.put(this.producturl,body,{headers:head1});
  }

}
