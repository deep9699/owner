import { Router,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { LowquantityComponent } from './lowquantity/lowquantity.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { PurchaseproductComponent } from './purchaseproduct/purchaseproduct.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { AllproductComponent } from './allproduct/allproduct.component';

const arr:Routes=[
{path:'',component:LoginComponent},
{path:'order',component:OrderComponent},
{path:'lowquantity',component:LowquantityComponent},
{path:'addproduct',component:AddproductComponent},
{path:'updateproduct',component:UpdateproductComponent},
{path:'addcategory',component:AddcategoryComponent},
{path:'purchaseproduct',component:PurchaseproductComponent},
{path:'pastorder',component:PastorderComponent},
{path:'allproduct',component:AllproductComponent}
];


export const routing=RouterModule.forRoot(arr);