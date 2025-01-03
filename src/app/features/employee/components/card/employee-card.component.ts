import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../../models/Employee';


@Component({
  selector: 'app-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css' ,
  standalone:false
})
export class EmployeeCardComponent {
  @Input() addedEmployee !: Employee;
}
