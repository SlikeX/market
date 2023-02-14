import {NgModule} from '@angular/core';

import {ProductComponent, ProductListComponent} from "./components";
import {SharedModule} from "../shared/shared.module";
import {PoductViewComponent} from './components/poduct-view/poduct-view.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    PoductViewComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class ProductsModule { }
