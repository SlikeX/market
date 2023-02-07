import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from "../../products/models/product.model";
import {CartFilterEnum} from "../../cart/models/cart-filter.enum";

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(cartList: ProductModel[], sortOption: string, isAsc: boolean): ProductModel[] {
    if (sortOption === CartFilterEnum.Name) return this.sortByName(cartList, isAsc);
    if (sortOption === CartFilterEnum.Amount) return this.sortByAmount(cartList, isAsc);
    if (sortOption === CartFilterEnum.Price) return this.sortByPrice(cartList, isAsc);
    return cartList;
  }

  sortByName(cartList: ProductModel[], isAsc: boolean): ProductModel[] {
    const res = [...cartList];
    res.sort((a, b) => {
      if (isAsc) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        return 0
      } else {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
        return 0
      }
    })
    return res
  }

  sortByAmount(cartList: ProductModel[], isAsc: boolean): ProductModel[] {
    const res = [...cartList];
    res.sort((a, b) => {
      return isAsc ? a.amount! - b.amount! : b.amount! - a.amount!
    })
    return res
  }

  sortByPrice(cartList: ProductModel[], isAsc: boolean): ProductModel[] {
    const res = [...cartList];
    res.sort((a, b) => {
      return isAsc ? a.price! - b.price! : b.price! - a.price!
    })
    return res
  }
}
