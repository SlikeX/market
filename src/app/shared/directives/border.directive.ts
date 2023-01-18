import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {
  @Input('appBorder') color!: string;

  constructor(
    private elem: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('click')
  onClick(): void {
    this.render.setStyle(this.elem.nativeElement, 'border', `2px solid ${this.color}`)
  }
}
