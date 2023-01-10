import {Component, OnInit} from '@angular/core';
import {ProductCategory} from "./category.enum";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'BMW x5';
  description: string = 'Family car';
  price: number = 30000;
  category = ProductCategory.Sedan;
  isAvailable: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
