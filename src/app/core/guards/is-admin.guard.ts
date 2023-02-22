import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userService.isAdmin()) {
      alert('You need to change role');
      //тут происходит навигет на главную страницу, для того, чтобы пофиксить баг ручного ввода
      // /admin в строку url. Можно ли как нибудь реализовать навигацию на тот роут, с которго была попытка
      // навигации. Т.е пытаюсь ввести /admin со страницы cart и в случае user роли остаюсь на этой же странице
      // без навигации на главную?

      // Думаю, что для этой задачи можно попробовать использовать CanDeactivate Guard,
      // там есть ифнормация о текущем роуте и о том, куда планируется переходить
      this.router.navigate(['']);
    }
    return this.userService.isAdmin();
  }

}
