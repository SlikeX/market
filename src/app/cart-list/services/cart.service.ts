import {Injectable} from '@angular/core';
import {ProductModel} from "../../product-list/product/models/product.model";
import {ProductCategory} from "../../first-component/category.enum";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Зачем тут объединение с пустым массив в типе?
  cartList: ProductModel[] | [] = [new ProductModel('BMW x5', 'Business car', 30000, ProductCategory.Sedan, true),
    new ProductModel('Toyota corolla', 'Sport car', 45000, ProductCategory.Coupe, false),
    new ProductModel('Chevrolet onix', 'Family car', 20000, ProductCategory.Minivan, true),
    new ProductModel('Porsche carrera', 'Super car', 100000, ProductCategory.Coupe, false)]


  constructor() {
  }
}
