import { Contractor } from "./Contractor";
import { Employee } from "./Employee";
import EmployeeManagement from "./EmployeeManagement";
import { FullTimeEmployee } from "./FullTimeEmployee";

let employeeController: EmployeeManagement = new EmployeeManagement();

// Create data

let fte: Employee = new FullTimeEmployee();
let constactor: Employee = new Contractor();

//Using Controller to process data

let totalSalary = employeeController.getTotalSalary([fte, constactor])
console.log(`Total salary: ${totalSalary}`);

