import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';

@Component({
    moduleId: module.id,
    selector: 'employee-add',
    templateUrl: 'employee-add.tpl.html'
})

export class EmployeeAddComponent {

    public employee: Employee = {
        id: -1,
        name: '',
        education: '',
        age: '',
        imgUrl: '',
        snippet: ''
    };

    constructor(private employeeService: EmployeeService,
                private router: Router){}

    postEmployee(){
        this.employeeService.postEmployee(this.employee);
        this.router.navigate(['/']);
    }

}