import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProcessOrderComponent} from "./process-order/process-order.component";

const routes: Routes = [
  {
    path: 'order',
    component: ProcessOrderComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
