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
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  p_id:number;
  p_name:string;
  p_price:number;
  p_qty:number;
  p_mfg:string;
  p_img:string;
  p_color:string;
  fk_cat_id:number;
  p_desc:string;
  cat_arr:category[]=[];
  flag:boolean=false;
  flag1:boolean=true;

  constructor(private _productser:ProductService,private _router:Router) { }

  onclickok()
  {
    this._productser.getProductById(this.p_id).subscribe(
      (data:product[])=>
      {
        if(data.length==1)
        {
          this.flag=true;
          this.flag1=false;
          this.p_name=data[0].p_name;
          this.p_price=data[0].p_price;
          this.p_qty=data[0].p_qty;
          this.p_mfg=data[0].p_mfg;
          this.p_img=data[0].p_img;
          this.p_color=data[0].p_color;
          this.fk_cat_id=data[0].fk_cat_id;
          this.p_desc=data[0].p_desc;

        }
        else
        {
          alert("Incorrect Product Id");
        }
      }
    );
  }
  onclickcancel()
  {
    this._router.navigate(['order']);
  }
  onclickupdate()
  {
    this._productser.updateProduct(new product(this.p_id,this.p_name,this.p_price,this.p_qty,this.p_mfg,this.p_img,this.p_color,this.fk_cat_id,this.p_desc)).subscribe(
      (Data:product[])=>
      {
        this._router.navigate(['order']);
      }
    );
  }
  

  ngOnInit() {

  }

}
