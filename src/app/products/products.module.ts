import {NgModule} from '@angular/core';

import {ProductComponent, ProductListComponent} from "./components";
import {SharedModule} from "../shared/shared.module";
import {PoductViewComponent} from './components/poduct-view/poduct-view.component';


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
    SharedModule
  ]
})
export class ProductsModule { }
