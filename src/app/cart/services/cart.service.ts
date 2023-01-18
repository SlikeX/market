import {Injectable} from '@angular/core';
import {ProductModel} from "../../products/models/product.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private boughtItem = new Subject();
  public boughtItem$ = this.boughtItem.asObservable();
  cartList: ProductModel[] | [] = [];


  constructor() {
  }

  totalCost(): number {
    return this.cartList.length ?
      this.cartList.map(product => product.price * product.amoutn!
      ).reduce((item, accum) => accum + item, 0) :
      0;
  }

  totalQuantity(): number {
    return this.cartList.length ?
      this.cartList.map(product => product.amoutn!).reduce((item, accum) => Number(accum) + Number(item), 0) :
      0
  }

  addToCart(product: ProductModel): void {
    const isAlreadyBought = !!this.cartList.filter(item => item.name === product.name).length;
    if (!isAlreadyBought) {
      product.amoutn = 1;
      this.cartList = [...this.cartList, product];
      this.boughtItem.next(product);
    } else {
      throw new Error('You already have it in your cart')
    }
  }

  increaseQuantity(name: string): void {
    this.cartList.find(product => product.name === name)!.amoutn!++;
    this.boughtItem.next(name);
  }

  decreaseQuantity(name: string): void {
    this.cartList.find(product => product.name === name)!.amoutn!--;
    this.boughtItem.next(name);
  }

  removeProduct(name: string): void {
    this.cartList = this.cartList.filter(product => product.name !== name);
    this.boughtItem.next(name);
  }
}
