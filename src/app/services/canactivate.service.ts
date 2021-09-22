import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class CanUserAccessThisPage implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (!this.allowUserToAccess(+this.userService.getuser().id)) {
      return this.router.createUrlTree(['/users']);
    }
    return true;
  }

  canActivateChild(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.canActivate(activatedRoute, state);
  }

  allowUserToAccess(id: number): boolean {
    let flag = id < 3 ? true : false;
    return flag;
  }
}
