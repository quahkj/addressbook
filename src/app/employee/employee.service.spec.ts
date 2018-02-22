import { Employee } from './employee';
import { EmployeeService } from './employee.service';

describe('EmployeeServiceTest', () => {

  let employeeService;

  beforeEach(() => {
    employeeService = new EmployeeService();
  });


  it('initial employee DB should be empty', () => {
      const employees: Employee[] = employeeService.getEmployees();
      expect(employees.length).toEqual(0);
  });

  it('Add and delete employee', () => {
    const newEmployee = new Employee('John', 'Smith', 'Marketing', '67568899');
    employeeService.addEmployee(newEmployee);
    const employees: Employee[] = employeeService.getEmployees();
    expect(employees.length).toEqual(1);
    expect(employees[0]).toEqual(newEmployee);

    const newEmployee2 = new Employee('Kean', 'Quah', 'IT', '55503362');
    employeeService.addEmployee(newEmployee2);
    const employees2: Employee[] = employeeService.getEmployees();
    expect(employees2.length).toEqual(2);
    expect(employees2[1]).toEqual(newEmployee2);

    const employees3 = employeeService.deleteEmployee(newEmployee2);
    expect(employees3.length).toEqual(1);
    expect(employees3[0]).toEqual(newEmployee);


  });




});
