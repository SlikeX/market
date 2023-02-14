import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output('buyProduct') buy = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddToCart(product: ProductModel): void {
    //нормально ли использовать этот метод, чтобы предотвратить навигацию при нажитии на кнопку buy
    event!.stopPropagation();
    this.buy.emit(product);
  }
}
