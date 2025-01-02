import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  standalone : false
})
export class EmployeeForm {
    @Input() open !: boolean;
    @Output() openFormfunc = new EventEmitter<boolean>();
  
    openForm():void{
      this.open = !this.open;
      this.openFormfunc.emit(this.open);
    }

   employeeForm = new FormGroup({
    name : new FormControl('', [Validators.required , Validators.minLength(3)]) , 
    email : new FormControl('' , [Validators.email]),
    position : new FormControl('' , [Validators.required])
  })
}
