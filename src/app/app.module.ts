import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponentComponent} from './first-component/first-component.component';
import {ProductListComponent} from './product-list/components/product-list.component';
import {ProductComponent} from './product-list/product/components/product.component';
import {CartListComponent} from './cart-list/components/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductListComponent,
    ProductComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
