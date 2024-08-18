//Create data, call controller to process data

const Employee = require("./Employee");
const SalaryController = require("./SalaryController");

// user-defined data - Model
let teo = new Employee(8000);
let ti = new Employee(10000);

// Init controller
let salaryController = new SalaryController();
let totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);