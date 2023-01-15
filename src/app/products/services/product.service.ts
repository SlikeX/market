import {Injectable} from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductCategory} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): ProductModel[] {
    return [new ProductModel('BMW x5', 'Business car', 30000, ProductCategory.Sedan, true),
      new ProductModel('Toyota corolla', 'Sport car', 45000, ProductCategory.Coupe, false),
      new ProductModel('Chevrolet onix', 'Family car', 20000, ProductCategory.Minivan, true),
      new ProductModel('Porsche carrera', 'Super car', 100000, ProductCategory.Coupe, false)]
  }
}
