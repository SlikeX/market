import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CartModule} from "./cart/cart.module";
import {ProductsModule} from "./products/products.module";
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirtsComponent } from './firts/firts.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductsModule,
    SharedModule,
    OrdersModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
