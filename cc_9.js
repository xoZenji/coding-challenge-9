// Task 1: Created Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    };
    calculateAnnualSalary() {
        return this.salary * 12;
    };
}; // Constucts employee, pulls details, and calculates the salary of the employee.

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000

// Task 2: Created Manager Class with Inheritance
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    };
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    };
    calculateBonus() {
        return this.salary * 12 * 0.10;
    };
}; // Created the manager class, pulls the details, and calculates the bonus.

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); 
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

// Task 3: Created Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    };

    addEmployee(employee) {
        this.employees.push(employee);
    };

    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()));
    };
// Task 4: Implemented Payroll System
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0);
    };
};

const company = new Company("TechCorp");
company.addEmployee(emp1); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
company.addEmployee(mgr1); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
company.listEmployees();
console.log(company.calculateTotalPayroll()); // Expected output: 165600 (assuming emp1 and mgr1 salaries)
