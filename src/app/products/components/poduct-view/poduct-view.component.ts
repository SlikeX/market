import {Component, OnInit} from '@angular/core';
import {CarImgURL, ProductCategory, ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-poduct-view',
  templateUrl: './poduct-view.component.html',
  styleUrls: ['./poduct-view.component.scss']
})
export class PoductViewComponent implements OnInit {

  product!: ProductModel

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.product = this.productService.getProduct(params.get('productID')) ??
        new ProductModel('name',
          'description',
          123, ProductCategory.Coupe,
          CarImgURL.Coupe,
          false,
          'id',
          0);
    })
  }

  onAddToCart(product: ProductModel): void {
    try {
      this.cartService.addToCart(product)
    } catch (error) {
      confirm('You already have it in your cart')
    }
  }
}
