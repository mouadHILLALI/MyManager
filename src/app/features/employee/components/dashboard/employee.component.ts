import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'employee-components',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  standalone:false
})
export class EmployeeComponent {
  @Input() open !: boolean;
  @Output() openFormfunc = new EventEmitter<boolean>();

  openForm():void{
    this.open = !this.open;
    this.openFormfunc.emit(this.open);
  }
}
