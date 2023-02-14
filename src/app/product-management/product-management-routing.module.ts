import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductManagementComponent} from "./product-management.component";
import {IsAdminGuard} from "../core/guards/is-admin.guard";
import {ProcessOrderComponent} from "../orders/process-order/process-order.component";
import {ProductEditingGuard} from "../core/guards/product-editing.guard";
import {ProductResolver} from "../core/guards/product-resolver.service";

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    component: ProductManagementComponent,
    children: [
      {path: 'product', component: ProductManagementComponent},
      {path: 'product/add', component: ProductManagementComponent},
      {
        path: 'product/edit/:productID',
        component: ProductManagementComponent,
        canDeactivate: [ProductEditingGuard],
        resolve: [ProductResolver]
      },
      {path: 'orders', component: ProcessOrderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule {
}
