export class ProductModel {
  constructor(public name: string,
              public description: string,
              public price: number,
              public category: ProductCategory,
              public imgUrl: CarImgURL,
              public isAvailable: boolean,
              public id: string,
              public amount: number = 0) {
  }
}
export enum ProductCategory {
  Minivan = 'Minivan',
  Hatchback = 'Hatchback',
  Coupe = 'Coupe',
  Sedan = 'Sedan'
}
export enum CarImgURL {
  Minivan = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/2019_Chrysler_Pacifica_Touring_L%2C_front_7.4.19.jpg',
  Hatchback = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/2018_Toyota_Corolla_%28MZEA12R%29_Ascent_Sport_hatchback_%282018-11-02%29_01.jpg',
  Coupe = 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Mercedes_S-Class_Coup%C3%A9_C217_Mondial_de_l%27Automobile_2014-10-14.jpg',
  Sedan = 'https://upload.wikimedia.org/wikipedia/commons/f/f0/BMW_G11_IMG_2002.jpg'
}
