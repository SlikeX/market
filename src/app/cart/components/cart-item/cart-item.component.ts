import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../../products/models/product.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() increase = new EventEmitter<string>();
  @Output() decrease = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onIncrease(name: string): void {
    this.increase.emit(name);
  }

  onDecrease(name: string): void {
    this.decrease.emit(name);
  }

  onRemove(name: string): void {
    this.remove.emit(name);
  }
}
