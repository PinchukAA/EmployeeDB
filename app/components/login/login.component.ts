import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  moduleId: module.id,
  selector: 'login-component',
  templateUrl: 'login.tpl.html'
})

export class LoginComponent {

  public user: any = {
    id: '',
    password: ''
  };

  constructor(private authService: AuthenticationService,
              private router: Router){}

  checkUser(){
    this.authService.authenticateUser(this.user.id, this.user.password)
        .then((isAuth: boolean) => {
          if(isAuth) this.router.navigate(['/']);
          else alert('Check login or password')
        }
    );
  }

  goToRegistration(){
      this.router.navigate(['registration']);
  }
}
