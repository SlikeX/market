import {Injectable} from '@angular/core';
import {CarImgURL, ProductCategory, ProductModel} from "../../products/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: ProductModel[] | [] = [new ProductModel('BMW x5', 'Business car', 30000, ProductCategory.Sedan,CarImgURL.Sedan, true),
    new ProductModel('Toyota corolla', 'Sport car', 45000, ProductCategory.Coupe,CarImgURL.Coupe, false),
    new ProductModel('Chevrolet onix', 'Family car', 20000, ProductCategory.Minivan,CarImgURL.Minivan, true),
    new ProductModel('Porsche carrera', 'Super car', 100000, ProductCategory.Coupe,CarImgURL.Coupe, false)]


  constructor() {
  }
}