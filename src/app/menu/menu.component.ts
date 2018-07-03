import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from '../customer_class';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router) { }
  onclickorder() {
    this._router.navigate(['/order']);
  }
  onclickhome() {
    this._router.navigate(['/allproduct']);
  }
  onclicklogout(){
    this._router.navigate(['/']);
  }
  onclicklow()
  {
    this._router.navigate(['/lowquantity']);
  }
  onclickadd()
  {
    this._router.navigate(['/addproduct']);
  }
  onclickupdate()
  {
    this._router.navigate(['/updateproduct']);
  }
  onclickaddc()
  {
    this._router.navigate(['/addcategory']);
  }
  onclickpurchase()
  {
    this._router.navigate(['/purchaseproduct']);
  }
  onclickpast()
  {
    this._router.navigate(['/pastorder']);
  }
  ngOnInit() {
  }

}
