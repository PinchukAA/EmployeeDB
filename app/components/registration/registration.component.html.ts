import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service';

@Component({
    moduleId: module.id,
    selector: 'register-component',
    templateUrl: 'registration.tpl.html'
})

export class RegistrationComponent {

    public user: User = {
        name: '',
        id: '',
        password: '',
        moderator: false
    };

    constructor(private userService: UserService,
                private router: Router){}

    registerUser(){
          this.isIdExist().then((e: boolean) => {
              if(e) {
                  this.userService.postUser(this.user);
                  this.router.navigate(['login']);
              } else alert(`A user with login ${this.user.id} already exist!`)
          });
    }

    isIdExist(){
        let tmpUsers: User[];
        return this.userService.getUsers()
            .then(users => tmpUsers = users )
            .then(() => {
                let i = tmpUsers.length;
                while (i--) if(tmpUsers[i].id === this.user.id) return false;
                return true;
            });
    }

    backToLogin(){
        this.router.navigate(['login']);
    }
}
