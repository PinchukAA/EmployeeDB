import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  moduleId: module.id,
  selector: 'employee-list',
  templateUrl: './employee-list.tpl.html'
})

export class EmployeeListComponent implements OnInit{
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private authService: AuthenticationService) {}

  ngOnInit(){
    this.reload();
  }

  reload(){
    this.employeeService.getEmployees().then(employees => this.employees = employees);

  }

  isModerator(){
    return this.authService.isModerator();
  }

}
