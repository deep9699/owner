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
  selector: 'app-lowquantity',
  templateUrl: './lowquantity.component.html',
  styleUrls: ['./lowquantity.component.css']
})
export class LowquantityComponent implements OnInit {

  pro_arr:product[]=[];
  constructor(private _orderser: OrderService, private _productser: ProductService, private _categoryser: CategoryService, private _router: Router) { }

  ngOnInit() {
    this._productser.getLowQuantityProduct().subscribe(
      (data:product[])=>
      {
        this.pro_arr=data;
      }
    );
  }

}
