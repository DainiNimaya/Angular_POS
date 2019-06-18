import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule,Routes} from "@angular/router";
import {LoginComponent} from "./view/login/login.component";
import {DashboardComponent} from "./view/dashboard/dashboard.component";
import { CustomerComponent } from './view/customer/customer.component';
import { ItemComponent } from './view/item/item.component';
import { OrderComponent } from './view/order/order.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'items',
    component: ItemComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
