import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CarImgURL, ProductCategory, ProductModel} from "../../products/models/product.model";
import {ProductService} from "../../products/services/product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    const id = route.paramMap.get('productID');
    const product = this.productService.getProduct(id);
    console.log('resolver')
    if (product) return of(product);
    return of(new ProductModel('name', '', 1, ProductCategory.Coupe, CarImgURL.Coupe, true, '1', 0))
  }
}
