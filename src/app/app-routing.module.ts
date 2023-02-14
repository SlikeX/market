import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoductViewComponent, ProductListComponent} from "./products";


const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product/:productID',
    component: PoductViewComponent
  },
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/product-list',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
