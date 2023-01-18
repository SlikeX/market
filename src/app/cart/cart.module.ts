import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartListComponent} from "./components";
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  exports: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
