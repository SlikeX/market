import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from "./components";


@NgModule({
  declarations: [CartListComponent],
  exports: [
    CartListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
