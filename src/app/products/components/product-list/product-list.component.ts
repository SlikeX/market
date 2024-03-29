import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";
import {CartService} from "../../../cart/services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Observable<ProductModel[]>;

  constructor(public productService: ProductService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    try {
      this.cartService.addToCart(product)
    } catch (error) {
      confirm('You already have it in your cart')
    }
  }
}
