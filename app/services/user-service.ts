import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { User } from '../models/user';

@Injectable()
export class UserService {
    private apiUrl = 'api/users';
    private headers = new Headers({'Content-Type': 'application/json'});

    private users: User[] = [];

    constructor(private http: Http) {}

    getUsers(): Promise<User[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUserById(id: string): Promise<User> {

        const url = `${this.apiUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }

    postUser(user: User){
        return this.http
            .post(this.apiUrl, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as User)
            .catch(this.handleError);
    }

    deleteUser(id: string){
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('Ошибка', error);
        return Promise.reject(error.message || error)
    }
}