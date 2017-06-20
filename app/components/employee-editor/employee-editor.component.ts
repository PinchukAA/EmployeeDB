import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';

@Component({
    moduleId: module.id,
    selector: 'employee-edit',
    templateUrl: 'employee-editor.tpl.html'
})

export class EmployeeEditorComponent implements OnInit, OnDestroy {
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
                private router: Router){}

    ngOnInit(){
        this.subscription = this.activateRoute.params.subscribe(params => this.id = params['employeeId']);
        this.employeeService.getEmployeeById(this.id).then(employee => this.employee = employee);
    }

    putEmployee(){
        this.employeeService.putEmployee(this.employee);
        this.router.navigate(['employee', this.employee.id]);
    }


    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}