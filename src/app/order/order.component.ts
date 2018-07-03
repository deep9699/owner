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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  pro_arr: product[] = [];
  o_arr: order[] = [];
  i:number=1;
  status_arr:string[]=[];
  constructor(private _orderser: OrderService, private _productser: ProductService, private _categoryser: CategoryService, private _router: Router) { }
  
  onclickdone(item:order)
  {
    this._orderser.updateStatus(item).subscribe(
      (data:order[])=>
      {
        console.log(data);
        alert("order done");
        this.ngOnInit();
      }
    );
  }
  ngOnInit() {
    this._orderser.getPendingOrder().subscribe(
      (data:order[])=>
      {
        this.o_arr=data;
        for(this.i=0;this.i<this.o_arr.length;this.i++)
        {
          console.log(this.o_arr[0].status);
          if(this.o_arr[this.i].status==1)
          {
            this.status_arr.push("done");
          }
          else
          {
            this.status_arr.push("pending");
          }
        }
        for(this.i=0;this.i<data.length;this.i++)
         {
          this._productser.getProductById(data[this.i].fk_p_id).subscribe(
            (data: product[]) => {

              this.pro_arr.push(data[0]);
              
            }

          );
        }
      }
    );
  }

}
