import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductManagementComponent} from "../../product-management/product-management.component";

@Injectable({
  providedIn: 'root'
})
export class ProductEditingGuard implements CanDeactivate<ProductManagementComponent> {
  canDeactivate(
    component: ProductManagementComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canDeactivate')
    if (confirm('Leave editing product w/o saving')) {
      return true
    }
    return false;
  }

}
