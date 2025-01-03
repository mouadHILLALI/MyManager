import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../../../models/Employee';
import { EmployeeService } from '../../service/employeeService.component';

@Component({
  selector: 'employee-components',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  standalone:false
})
export class EmployeeComponent {
  @Input() open !: boolean;
  @Output() openFormfunc = new EventEmitter<boolean>();
  close : boolean = false;
  constructor(private employeeService : EmployeeService){

  }
  employeeForm !:FormGroup;
  employeeRecord!: Record<'name' | 'email' | 'position', string>;

  onFormReady(form: FormGroup): void {
    this.employeeForm = form;
  }
  onFormSubmitted(record: Record<'name' | 'email' | 'position', string>): void {
    this.employeeRecord = record;
    this.addEmployee(this.employeeRecord);
  }

  openForm():void{
    this.open = !this.open;
    this.openFormfunc.emit(this.open);
  }

  closeModal() : void {
    this.close = !this.close;
  }

  addEmployee(employee :Record<'name' | 'email' | 'position', string> ):Employee {
    this.close = true;  
    return this.employeeService.addEmployee(employee);
  }



}
