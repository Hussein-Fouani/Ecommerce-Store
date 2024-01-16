import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userauth: UserAuthService,
    private router: Router,
    private userservice: UserService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.userauth.getToken() !== null) {
      const role = route.data['roles'] as Array<string>;
      if (role) {
        const match = this.userservice.roleMatch(role);
        if (match) {
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return true;
        }
      }
    }
    this.router.navigate(['/login']);
    return false;
  }ng 
}
