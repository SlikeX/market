import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-products',
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
