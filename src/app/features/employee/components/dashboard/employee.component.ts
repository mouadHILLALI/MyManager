import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../../../models/Employee';
import { EmployeeService } from '../../service/employeeService.component';

@Component({
  selector: 'employee-components',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'], 
  standalone:false
})
export class EmployeeComponent implements OnInit {
  @Input() open!: boolean;
  @Output() openFormfunc = new EventEmitter<boolean>();

  close: boolean = false;
  employees: Employee[] = [];
  addedEmployee !: Employee | null;
  employeeForm!: FormGroup;
  employeeRecord!: Record<'name' | 'email' | 'position', string>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  onFormReady(form: FormGroup): void {
    this.employeeForm = form;
  }

  onFormSubmitted(record: Record<'name' | 'email' | 'position', string>): void {
    this.addEmployee(record);
  }

  openForm(): void {
    this.open = !this.open;
    this.openFormfunc.emit(this.open);
  }

  closeModal(): void {
    this.close = !this.close;
  }

  addEmployee(employeeData: Record<'name' | 'email' | 'position', string>): void {
    const newEmployee = this.employeeService.addEmployee(employeeData); 
    this.addedEmployee = newEmployee;
    this.employees.push(newEmployee); 
    this.closeModal(); 
  }

  getAllEmployees(): void {
    this.employees = this.employeeService.getAllEmployees();
  }
}
