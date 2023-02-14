import {NgModule} from '@angular/core';

import {CartListComponent} from "./components";
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  exports: [
    CartListComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CartModule { }
