import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../product_class';
import { category } from '../category_class';
import { category_product } from '../category_product_class';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  cat_arr:category[]=[];
  pro_arr:product[]=[];
  cat_pro_arr:category_product[]=[];
  
  constructor(private _productser:ProductService,private _categoryser:CategoryService,private _router:Router) { }

onclickcat(cat_name:string)
{
  
this._productser.getProductByCatName(cat_name).subscribe(
  (data:category_product[])=>
  {
    this.cat_pro_arr=data;
    
  }
);
}
 onlclickpro(p_id)
 {
 this._productser.getProductById(p_id).subscribe(
   (data:product[])=>
   {
   this._router.navigate(['productdetails',p_id]);
   }
 );
 }
  ngOnInit() {
    this._categoryser.getAllCategory().subscribe(
      (data:category[])=>
      {
        this.cat_arr=data;
      }
    );
    this._productser.getAllProduct().subscribe(
      (data:category_product[])=>
      {
        this.cat_pro_arr=data;
      }
    );
  }



}
