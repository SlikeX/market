import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductModel} from "../../../products/models/product.model";
import {Subscription} from "rxjs";
import {CartFilterConfig} from "../../models/cart-filter-config";
import {CartFilterEnum} from "../../models/cart-filter.enum";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  // немного необычно видеть инициализацию полей в этом месте с помощью сервиса
  // может я ошибаюсь, но мне кажеться, что это равноценно инийиализации внутри конструктора
  // я бы перенес эту инициализацию в ngOnInit()
  cartList = this.cartService.getCartList();
  totalCost = this.cartService.totalCost();
  totalQuantity = this.cartService.totalQuantity();
  cartFilterConfig!: CartFilterConfig;
  private sub!: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    console.log(this.cartList);
    this.cartFilterConfig = {
      sortField: CartFilterEnum.Name,
      isAsc: true
    };
    this.sub = this.cartService.boughtItem$.subscribe(product => {
      this.cartList = this.cartService.getCartList();
      this.totalQuantity = this.cartService.totalQuantity();
      this.totalCost = this.cartService.totalCost();
    })
  }

  trackByNames(index: number, product: ProductModel): number {
    return index
  }

  increaseQuantity(name: string): void {
    this.cartService.increaseQuantity(name);
  }

  decreaseQuantity(name: string): void {
    this.cartService.decreaseQuantity(name);
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty()
  }

  removeProduct(name: string): void {
    this.cartService.removeProduct(name);
  }

  removeAllProducts(): void {
    this.cartService.removeAllProducts()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
