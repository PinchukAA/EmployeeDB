import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  moduleId: module.id,
  selector: 'emp-app',
  templateUrl: './app.tpl.html'
})
export class AppComponent {
  constructor(private authService: AuthenticationService,
              private router: Router) {}

  logout(){
    this.authService.logout();
    this.router.navigate(["login"])
  }

  isAuth(){
    return this.authService.isAuth();
  }
}
