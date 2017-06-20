import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeEditorComponent } from './employee-editor/employee-editor.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component.html';
import { AuthGuard } from '../guards/auth.guard';
import { AddGuard } from '../guards/add.guard';

export let routes = [
  { path: '', component: EmployeeListComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

  { path: 'add', component: EmployeeAddComponent, canActivate: [AuthGuard, AddGuard] },
  { path: 'edit/:employeeId', component: EmployeeEditorComponent, canActivate: [AuthGuard, AddGuard] },
  { path: 'employee/:employeeId', component: EmployeeInfoComponent, canActivate: [AuthGuard] }
];
