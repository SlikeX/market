import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CartModule} from "./cart/cart.module";
import {CartRoutingModule} from "./cart/cart-routing.module";
import {ProductsModule} from "./products/products.module";
import {SharedModule} from './shared/shared.module';
import {OrdersModule} from './orders/orders.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FirtsComponent} from './firts/firts.component';
import {Router} from "@angular/router";
import {OrdersRoutingModule} from "./orders/orders-routing.module";
import {ProductManagementModule} from "./product-management/product-management.module";

@NgModule({
  declarations: [
    AppComponent,
    FirtsComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    SharedModule,
    OrdersModule,
    BrowserAnimationsModule,
    CartModule,
    CartRoutingModule,
    OrdersRoutingModule,
    ProductsModule,
    ProductManagementModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
