import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService, AuthenticationService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private usersService: UsersService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.usersService.loggedUser()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login', { returnUrl: state.url }]);

        return false;
    }
}
