import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product/services/product.service";
import {ProductModel} from "../product/models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: ProductModel[];

  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
