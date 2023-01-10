import {ProductCategory} from "../../../first-component/category.enum";

export class ProductModel {
  constructor(public name: string,
              public description: string,
              public price: number,
              public category: ProductCategory,
              public isAvailable: boolean) {
  }
}
