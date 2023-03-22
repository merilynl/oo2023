interface EmployeeInterface{
    name: string;
    department: string;
    IDCode: number;
    calculateHoursWorked(hours:Array<number>): number;
    calculateSalary(hours: number, payRate: number): number;
    
}

class Employee implements EmployeeInterface{
    name: string;
    department: string;
    IDCode: number;

    constructor(n: string, dept: string, code: number) { 
        this.name = n;
        this.department = dept;
        this.IDCode = code;
    }

    calculateHoursWorked(h: number[]): number {
        let hoursWorked = 0;
        if(h.length > 0) {
            for(let i = 0; i < h.length; i++){
                hoursWorked += h[i];  
            }
        }
        return hoursWorked;
    }

    calculateSalary(h: number, rate: number): number {
        let salary = h*rate;
        return salary;
    }
}

export{
    EmployeeInterface,
    Employee
}

let accountant: EmployeeInterface = new Employee("Kati", "Accounting", 1);
let accountantHoursWorked: number = accountant.calculateHoursWorked([8, 7, 6, 5, 8, 3, 2, 8, 4]);
let accountantSalary: number = accountant.calculateSalary(accountantHoursWorked, 120);
console.log("Raamatupidaja palk on " + accountantSalary);
console.log("Raamatupidaja tootas " + accountantHoursWorked + " tundi");