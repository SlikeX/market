import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProcessOrderComponent} from "./process-order/process-order.component";
import {IsCartEmptyGuard} from "../core/guards/is-cart-empty.guard";

const routes: Routes = [
  {
    path: 'order',
    canActivate: [IsCartEmptyGuard],
    component: ProcessOrderComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
