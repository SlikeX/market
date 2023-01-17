import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../products/models/product.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product!: ProductModel

  constructor() { }

  ngOnInit(): void {
  }

}
