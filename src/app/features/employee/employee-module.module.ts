import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/dashboard/employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent  // Default route for this module
  }
];

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ]
})
export class EmployeeModule { }
