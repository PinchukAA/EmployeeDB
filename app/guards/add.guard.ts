import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service';

@Injectable()
export class AddGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.isModerator()) return true;

        this.router.navigate(['/']);
        return false;
    }
}