import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Employee } from '../models/employee';
//import '/rxjs/add/operator/toPromise'

@Injectable()
export class EmployeeService {
    private apiUrl = 'api/employees';
    private headers = new Headers({'Content-Type': 'application/json'});

    private employees: Employee[] = [];

    constructor(private http: Http) {}

    getEmployees(): Promise<Employee[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Employee[])
            .catch(this.handleError);
    }

    getEmployeeById(id: number): Promise<Employee> {

        const url = `${this.apiUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Employee)
            .catch(this.handleError);
    }

    postEmployee(employee: Employee){
        return this.http
            .post(this.apiUrl, JSON.stringify(employee), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Employee)
            .catch(this.handleError);
    }

    putEmployee(employee: Employee){
        const url = `${this.apiUrl}/${employee.id}`;
        return this.http
            .put(url, JSON.stringify(employee), {headers: this.headers})
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    deleteEmployee(id: number){
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