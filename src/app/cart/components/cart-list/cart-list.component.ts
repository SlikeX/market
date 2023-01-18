import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductModel} from "../../../products/models/product.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartList = this.cartService.cartList;
  totalCost = 0;
  totalQuantity = 0;
  private sub!: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.sub = this.cartService.boughtItem$.subscribe(product => {
      this.cartList = this.cartService.cartList;
      this.cartService.totalQuantity();
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

  removeProduct(name: string): void {
    this.cartService.removeProduct(name);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
