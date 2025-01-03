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
    @Output() formReady = new EventEmitter<FormGroup>();
    @Output() formSubmitted = new EventEmitter<Record<'name'|'email'|'position' , string>>();
    openForm():void{
      this.open = !this.open;
      this.openFormfunc.emit(this.open);
    }

   employeeForm = new FormGroup({
    name : new FormControl('', [Validators.required , Validators.minLength(3)]) , 
    email : new FormControl('' , [Validators.email]),
    position : new FormControl('' , [Validators.required])
  })

  ngOnInit():void{
    this.formReady.emit(this.employeeForm);
  }

  submitForm(): void {
    if (this.employeeForm.valid) {
      const fromValues : Record<'name'|'email'|'position' , string>  = {
        name: this.employeeForm.get('name')?.value ?? '',
        email: this.employeeForm.get('email')?.value ?? '',
        position: this.employeeForm.get('position')?.value ?? '',
      };
      this.formSubmitted.emit(fromValues);
      this.openForm();
    } else {
      console.error('Form is invalid!');
    }
  }
}
