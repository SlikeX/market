import {Injectable} from '@angular/core';
import {ProductModel} from "../../products/models/product.model";


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  updateItem(product: ProductModel): void {
    localStorage.removeItem(product.id);
    localStorage.setItem(product.id, JSON.stringify(product))
  }

  removeAllItems(): void {
    localStorage.clear();
  }
}
