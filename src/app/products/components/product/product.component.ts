import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output('buyProduct') buy = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddToCart(product: ProductModel): void {
    this.buy.emit(product)
  }
}
