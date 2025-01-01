import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent} from './components/employee.component';
import { EmployeeService } from './service/employeeService.component';



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule 
  ] , 
  providers : [EmployeeService]
})
export class UserModuleModule { }
