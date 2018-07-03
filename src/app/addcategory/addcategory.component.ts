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
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  cat_id:number;
  cat_name:string;
  constructor(private _categoryser:CategoryService,private _router:Router) { }

  onclickadd()
  {
    this._categoryser.addCategory(new category(this.cat_id,this.cat_name)).subscribe(
      (data:category[])=>
      {
        console.log(data);
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
        
        this.cat_id=data[data.length-1].cat_id+1;
      }
    );
  }

}
