import {Injectable} from '@angular/core';
import {UserRole} from "../models/user-role.enum";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userRole: UserRole = UserRole.admin;

  constructor() {
  }

  getUserRole(): UserRole {
    return this.userRole;
  };

  changeUserRole(): void {
    if (this.userRole === UserRole.admin) {
      this.userRole = UserRole.user
    } else {
      this.userRole = UserRole.admin
    }
  };

  isAdmin(): boolean {
    return this.userRole === UserRole.admin
  }
}
