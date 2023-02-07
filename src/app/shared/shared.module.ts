import {NgModule} from '@angular/core';
import {MaterialUIModule} from './material-ui/material-ui.module';
import {HighlightDirective} from './directives/highlight.directive';
import {BorderDirective} from './directives/border.directive';


@NgModule({
  declarations: [
    HighlightDirective,
    BorderDirective
  ],
  imports: [],
  exports: [
    MaterialUIModule,
    HighlightDirective,
    BorderDirective
  ]
})
export class SharedModule { }
