import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../product_class';
import { category } from '../category_class';
import { category_product } from '../category_product_class';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { OrderService } from '../order.service';
import { order } from '../order_class';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  p_mfg:string;
  p_img:string;
  p_color:string;
  fk_cat_id:number=1;
  p_desc:string;
  cat_arr:category[]=[];
  constructor(private _categoryser:CategoryService,private _productser:ProductService,private _router:Router) { }

onclickadd()
{
  this._productser.addProduct(new product(this.p_id,this.p_name,this.p_price,this.p_qty,this.p_mfg,this.p_img,this.p_color,this.fk_cat_id,this.p_desc)).subscribe(
    (data:any[])=>
    {
      this._router.navigate(['order']);
    }
  );
}

onclickcancel()
{
  this._router.navigate(['order']);
}

  ngOnInit() {
    this._categoryser.getAllCategory().subscribe(
      (data:category[])=>
      {
        this.cat_arr=data;
      }
    );
    this._productser.getAllProduct().subscribe(
      (data:product[])=>
      {
        this.p_id=data[data.length-1].p_id+1;
      }
    );
  }

}
