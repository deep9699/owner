import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from './product_class';
import { category } from './category_class';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private catgoryurl:string="http://localhost:3000/category/"
  constructor(private _http:HttpClient) { }

  getAllCategory()
  {
    return this._http.get(this.catgoryurl);
  }

  addCategory(item:category)
  {
    
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
     return this._http.post(this.catgoryurl,body,{headers:head1});
  }

}
