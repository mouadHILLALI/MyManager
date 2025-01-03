import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/dashboard/employee.component';
import { EmployeeForm } from './components/forms/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service/employeeService.component';
import { EmployeeCardComponent } from './components/card/employee-card.component';
import { Employee } from '../../models/Employee';
const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent  ,
  }
  ,
  {
    path:"*" , 
    component: EmployeeComponent
  }
];

@NgModule({
  declarations: [EmployeeComponent , EmployeeForm , EmployeeCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ], 
  providers:[EmployeeService]
  
})
export class EmployeeModule { 
  open : boolean = false;

  
  openForm(): void {
    this.open = !this.open;
}

}
