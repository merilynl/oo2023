import {EmployeeInterface, Employee} from "../seminar_8_kodutoo";

let testEmp:EmployeeInterface = new Employee("Kati", "Marketing", 1);

beforeEach(() => {
    testEmp=new Employee("Kati", "Marketing", 1);
});

test('salary', ()=>{
    expect(testEmp.calculateSalary(10, 120)).toBe(1200);
    expect(testEmp.calculateSalary(51, 120)).toBe(6120);
    expect(testEmp.calculateSalary(0, 100)).toBe(0);
});

test('hours', ()=>{
    expect(testEmp.calculateHoursWorked([8, 7, 6])).toBe(21);
    expect(testEmp.calculateHoursWorked([8, 7, 6, 5, 8, 3, 2, 8, 4])).toBe(51);
    expect(testEmp.calculateHoursWorked([])).toBe(0);
});

