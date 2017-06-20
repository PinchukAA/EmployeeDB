import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
    moduleId: module.id,
    selector: 'employee-info',
    templateUrl: 'employee-info.tpl.html'
})

export class EmployeeInfoComponent implements OnInit, OnDestroy{
    private id: number;
    private subscription: Subscription;
    public employee: Employee = {
        id: -1,
        name: '',
        education: '',
        age: '',
        imgUrl: '',
        snippet: ''
    };

    constructor(private activateRoute: ActivatedRoute,
                private employeeService: EmployeeService,
                private authService: AuthenticationService,
                private router: Router){}

    ngOnInit(){
        this.subscription = this.activateRoute.params.subscribe(params => this.id = params['employeeId']);
        this.employeeService.getEmployeeById(this.id).then(employee => this.employee = employee);
    }

    editEmployee(){
        this.router.navigate(['edit', this.employee.id]);
    }

    deleteEmployee(){
        this.employeeService.deleteEmployee(this.employee.id);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    isModerator(){
        return this.authService.isModerator();
    }
}