import {NgModule} from '@angular/core';

import {CartListComponent} from "./components";
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  exports: [
    CartListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CartModule { }
