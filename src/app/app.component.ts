import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {UserService} from "./core/services/user.service";
import {UserRole} from "./core/models/user-role.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;
  title = 'Market';
  role!: UserRole;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.role = this.userService.getUserRole();
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = this.title;
  }

  changeRole(): void {
    this.userService.changeUserRole();
    this.role = this.userService.getUserRole();
  }
}
