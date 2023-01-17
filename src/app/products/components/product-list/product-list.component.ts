import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";
import {CartService} from "../../../cart/services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: ProductModel[];
  private cartListSub!: Subscription;

  constructor(public productService: ProductService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addToCart(product)
  }
}
