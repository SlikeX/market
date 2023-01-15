export class ProductModel {
  constructor(public name: string,
              public description: string,
              public price: number,
              public category: ProductCategory,
              public isAvailable: boolean) {
  }
}
export enum ProductCategory {
  Minivan = 'Minivan',
  Hatchback = 'Hatchback',
  Coupe = 'Coupe',
  Sedan = 'Sedan'
}
