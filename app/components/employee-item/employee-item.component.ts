import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'employee-item',
  templateUrl: './employee-item.tpl.html'
})

export class EmployeeItemComponent {

  @Input()
  employee: Employee;

  constructor(private employeeService: EmployeeService,
              private employeeList: EmployeeListComponent,
              private router: Router) {}

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.employee.id);
    this.employeeList.reload();
  }

  editEmployee(){
    this.router.navigate(['edit', this.employee.id]);
  }

  isModerator(){
    return this.employeeList.isModerator();
  }

}
