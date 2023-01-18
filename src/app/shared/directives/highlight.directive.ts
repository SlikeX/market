import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') background: string = 'transparent';

  @HostListener('mouseenter') onMouseEnter() {
    this.background = 'pink';
  }

  @HostListener('mouseleave') onMouseLeve() {
    this.background = 'transparent';
  }
}
