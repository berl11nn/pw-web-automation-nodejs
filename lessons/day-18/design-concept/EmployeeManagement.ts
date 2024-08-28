import { Employee } from "./Employee";

export default class EmployeeManagement{

    // Empharize IS-A relationship processing
    // Controller sinh ra truớc khi detail implementation
    // Mục đích của controller viết dựa trên hướng design
    getTotalSalary(employeeList: Employee[]){
        let totalSalary: number = 0;
        employeeList.forEach(emp => {
            totalSalary += emp.getSalary();
        })

        return totalSalary;
    }
}