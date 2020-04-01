/**
 * Auth guard
 */
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
      private router: Router,
      private authenticationService: AuthenticationService
      ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authenticationService.isLogIn();
        if (currentUser) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
