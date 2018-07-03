import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { LowquantityComponent } from './lowquantity/lowquantity.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { PurchaseproductComponent } from './purchaseproduct/purchaseproduct.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { AllproductComponent } from './allproduct/allproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    MenuComponent,
    LowquantityComponent,
    AddproductComponent,
    UpdateproductComponent,
    AddcategoryComponent,
    PurchaseproductComponent,
    PastorderComponent,
    AllproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
