import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent ,
        children : [
            {
                path : "employee" ,
                loadChildren: () => import('./features/employee/employee-module.module').then(m => m.EmployeeModule) 
            }
        ]
    }
];
