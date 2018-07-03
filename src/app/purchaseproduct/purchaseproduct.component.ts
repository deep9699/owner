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
  selector: 'app-purchaseproduct',
  templateUrl: './purchaseproduct.component.html',
  styleUrls: ['./purchaseproduct.component.css']
})
export class PurchaseproductComponent implements OnInit {

  flag:boolean=false;
  flag1:boolean=true;
  p_qty:number;
  p_id:number;
  p_arr:product;
  constructor(private _productser:ProductService,private _orderser:OrderService,private _router:Router) {}
  onclickok()
  {
    this._productser.getProductById(this.p_id).subscribe(
      (data:product[])=>
      {
        if(data.length==1)
        {
          this.p_arr=data[0];
          this.flag=true;
          this.flag1=false;
          this.p_qty=data[0].p_qty;
        }
        else
        {
          alert("Incorrect Product Id");
        }
      }
    );
  }
  onclickpurchase()
  {
    this._orderser.BuyProduct(this.p_qty,this.p_arr).subscribe(
      (data:product[])=>
      {
        this._router.navigate(['order']);
      }
    );
  }
  ngOnInit() {
  }

}
