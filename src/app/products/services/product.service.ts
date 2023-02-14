import {Injectable} from '@angular/core';
import {CarImgURL, ProductCategory, ProductModel} from "../models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly products = [
    new ProductModel('BMW x5', 'Business car', 30000, ProductCategory.Sedan, CarImgURL.Sedan, false, '1'),
    new ProductModel('Toyota corolla', 'Sport car', 45000, ProductCategory.Coupe, CarImgURL.Coupe, false, '2'),
    new ProductModel('Chevrolet onix', 'Family car', 20000, ProductCategory.Minivan, CarImgURL.Minivan, false, '3'),
    new ProductModel('Porsche carrera', 'Super car', 100000, ProductCategory.Coupe, CarImgURL.Coupe, false, '4')]

  constructor() {
  }

  getProducts(): Observable<ProductModel[]> {
    return of(this.products)
  }

  getProduct(id: string | null): ProductModel | undefined {
    return this.products.find(elem => elem.id === id);
  }
}
