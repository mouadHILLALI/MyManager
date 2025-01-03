import { Employee } from "../../../models/Employee";

export class EmployeeService {
    private employees: Employee [] = [];

    
    addEmployee(employee : Record< "name"|"email"|"position", String>) : Employee {
        const id : number = this.employees.length+1;
        const newEmplyee : Employee = {
            id : id , 
            name : employee.name ,
            email : employee.email ,
            position: employee.position
        } 
        this.employees.push(newEmplyee);
        localStorage.setItem("employees" , JSON.stringify(this.employees));
        return newEmplyee;
    }

    deleteEmployee(id : number): boolean {
        return false ;
    }

    updateEmployee(employee : Employee): Employee{
        return employee;
    }

    getAllEmployees(): Employee[] {
        const employeesString = localStorage.getItem("employees");
        if (employeesString) {
            return JSON.parse(employeesString) as Employee[];
        }
        return [];
    }
    
}