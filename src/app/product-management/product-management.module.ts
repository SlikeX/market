import {NgModule} from '@angular/core';

import {ProductManagementRoutingModule} from './product-management-routing.module';
import {ProductManagementComponent} from "./product-management.component";


@NgModule({
  declarations: [
    ProductManagementComponent
  ],
  imports: [
    ProductManagementRoutingModule
  ],
  exports: [
    ProductManagementRoutingModule
  ]
})
export class ProductManagementModule { }
