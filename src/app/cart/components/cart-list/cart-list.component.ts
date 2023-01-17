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

  cartList!: ProductModel[];
  private cartListSub!: Subscription;
  // totalCost = this.cartService.totalCost();
  totalQuantity = this.cartService.totalQuantity();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartListSub = this.cartService.cartList$.subscribe(
      products => this.cartList = products
    )
  }

  trackByNames(index: number, product: ProductModel): number {
    return index
  }

}
