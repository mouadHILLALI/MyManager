import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/dashboard/employee.component';
import { EmployeeForm } from './components/forms/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
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
  declarations: [EmployeeComponent , EmployeeForm],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class EmployeeModule { 
  open : boolean = false;
  openForm(): void {
    this.open = !this.open;
}
}
