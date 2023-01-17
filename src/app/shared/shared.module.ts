import {NgModule} from '@angular/core';
import {MaterialUIModule} from './material-ui/material-ui.module';
import {HighlightDirective} from './directives/highlight.directive';


@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    MaterialUIModule
  ],
  exports: [
    MaterialUIModule,
    HighlightDirective
  ]
})
export class SharedModule { }
