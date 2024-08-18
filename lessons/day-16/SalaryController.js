//Data model processing - Dùng để thực hiện cho salary - FP
// Controller sinh ra để xử lý model
class SalaryController {

    getTotalSalary(employeeList){
        let totalSalary = 0;
        employeeList.forEach(function(employee){
            totalSalary += employee.salary;
        });
        return totalSalary;
    }

}

module.exports = SalaryController;