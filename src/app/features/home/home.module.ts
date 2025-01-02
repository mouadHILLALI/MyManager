import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from '../employee/employee-module.module';





@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule , SharedModule , RouterModule
  ] ,
  exports : [HomeComponent]
})
export class HomeModule { }
