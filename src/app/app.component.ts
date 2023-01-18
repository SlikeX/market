import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;
  title = 'Market';

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = this.title;
  }
}
