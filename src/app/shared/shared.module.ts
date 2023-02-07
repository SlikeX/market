import {NgModule} from '@angular/core';
import {MaterialUIModule} from './material-ui/material-ui.module';
import {HighlightDirective} from './directives/highlight.directive';
import {BorderDirective} from './directives/border.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HighlightDirective,
    BorderDirective,
    OrderByPipe
  ],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    MaterialUIModule,
    HighlightDirective,
    BorderDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
