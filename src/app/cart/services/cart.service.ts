import {Injectable} from '@angular/core';
import {ProductModel} from "../../products/models/product.model";
import {Subject} from "rxjs";
import {LocalStorageService} from "../../core/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private boughtItem = new Subject();
  public boughtItem$ = this.boughtItem.asObservable();
  private cartList: ProductModel[] = this.getCartList();


  constructor(private localStorageService: LocalStorageService) {
  }

  getCartList(): ProductModel[] {
    const res = [];
    for (let i = 0; i < 5; i++) {
      const item = this.localStorageService.getItem(i.toString());
      if (item) {
        res.push(JSON.parse(item))
      }
    }
    return res.length > 0 ? res as ProductModel[] : [];
  }

  totalCost(): number {
    const cartList = this.getCartList();
    return cartList.length ?
      cartList.map(product => product.price * product.amount!
      ).reduce((item, accum) => accum + item, 0) :
      0;
  }

  totalQuantity(): number {
    const cartList = this.getCartList();
    return cartList.length ?
      cartList.map(product => product.amount!).reduce((item, accum) => Number(accum) + Number(item), 0) :
      0
  }

  isCartEmpty(): boolean {
    const cartList = this.getCartList();
    return !!cartList.length
  }

  addToCart(product: ProductModel): void {
    const cartList = this.getCartList();
    const isAlreadyBought = !!cartList.filter(item => item.name === product.name).length;
    console.log(isAlreadyBought);
    if (!isAlreadyBought) {
      product.amount = 1;
      this.localStorageService.setItem(product.id, JSON.stringify(product))
      this.boughtItem.next(product);
    } else {
      throw new Error('You already have it in your cart')
    }
  }

  increaseQuantity(name: string): void {
    const cartList = this.getCartList();
    const product = cartList.find(product => product.name === name)!;
    product.amount!++;
    this.localStorageService.updateItem(product);
    this.boughtItem.next(name);
  }

  decreaseQuantity(name: string): void {
    const cartList = this.getCartList();
    const product = cartList.find(product => product.name === name)!;
    if (product.amount <= 1) {
      product.amount!--;
      this.localStorageService.removeItem(product.id);
      this.boughtItem.next(name);
      return
    }
    product.amount!--;
    this.localStorageService.updateItem(product);
    this.boughtItem.next(name);
  }

  removeProduct(id: string): void {
    this.localStorageService.removeItem(id);
    this.boughtItem.next(id);
  }

  removeAllProducts(): void {
    this.localStorageService.removeAllItems();
    this.boughtItem.next('removed');
  }
}
