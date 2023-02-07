import {Injectable} from '@angular/core';
import {CarImgURL, ProductCategory, ProductModel} from "../models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Observable<ProductModel[]> {
    return of([new ProductModel('BMW x5', 'Business car', 30000, ProductCategory.Sedan, CarImgURL.Sedan, false),
      new ProductModel('Toyota corolla', 'Sport car', 45000, ProductCategory.Coupe, CarImgURL.Coupe, false),
      new ProductModel('Chevrolet onix', 'Family car', 20000, ProductCategory.Minivan, CarImgURL.Minivan, false),
      new ProductModel('Porsche carrera', 'Super car', 100000, ProductCategory.Coupe, CarImgURL.Coupe, false)])
  }
}
