import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user-service';

@Injectable()
export class AuthenticationService {
    public currentUser: User;
    public auth: boolean = false;

    constructor(private userService: UserService){}

    authenticateUser(id: string, password: string){

        return this.userService.getUserById(id)
            .then(user => this.currentUser = user)
            .then(() => {
                this.auth = this.currentUser.password == password;
                return this.auth;
        });
    }

    isAuth(): boolean {
        return this.auth;
    }

    isModerator(): boolean {
        return this.currentUser.moderator;
    }

    logout(){
        this.currentUser = null;
        this.auth = false;
    }
}