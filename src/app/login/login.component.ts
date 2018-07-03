import { Component, OnInit } from '@angular/core';
import { admin } from '../admin_class';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:number;
  password:string;
  constructor(private _adminser:AdminService,private _router:Router) { }

  onclicklogin()
  {
    this._adminser.adminLogin(new admin(this.id,this.password)).subscribe(
      (data:admin[])=>
      {
        console.log(data);
        this._router.navigate(['order']);
      }
    );
  }
  ngOnInit() {
  }

}
