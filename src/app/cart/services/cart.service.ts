import {Injectable} from '@angular/core';
import {ProductModel} from "../../products/models/product.model";
import {Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList = new Subject<ProductModel[]>();
  public cartList$ = this.cartList.asObservable();

  constructor() {
  }

  // totalCost(): number {
  //   return this.cartList.length ?
  //     this.cartList.map(product => product.price).reduce((item, accum) => accum + item, 0) :
  //     0;
  // }

  totalQuantity(): Subscription {
    return this.cartList$.subscribe(productsList => productsList.length);
  }

  addToCart(product: ProductModel): void {
    this.cartList.next([product])
  }
}
