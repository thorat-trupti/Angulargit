import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './view-user/view-user.component';



@NgModule({
  declarations: [
    RegisterComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
    RegisterComponent,ViewUserComponent
  ]
})
export class EmployeeModule { }
