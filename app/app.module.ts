import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AppComponent } from './components/application/app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeEditorComponent } from './components/employee-editor/employee-editor.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component.html';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './services/in-memory-service';
import { routes } from './components/routes';
import { EmployeeService } from './services/employee-service';
import { UserService } from './services/user-service';
import { AuthenticationService } from './services/authentication-service';

import { AuthGuard } from './guards/auth.guard';
import { AddGuard } from './guards/add.guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryService, {passThruUnknownUrl: true}),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeInfoComponent,
    EmployeeEditorComponent,
    EmployeeAddComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    AuthGuard,
    AddGuard,
    EmployeeService,
    UserService,
    AuthenticationService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
