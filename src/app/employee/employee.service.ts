import { Injectable } from '@angular/core';
import { Employee } from './employee';

/*
 * This is a mock up service that acts as repository for employee. In real life it should connect to backend
 * resource APIs.
 */
@Injectable()
export class EmployeeService {

  // Use array to hold the employee in memory
  private employees: Employee[] = [];
  // sequence of employee id that can be use for add or find - in real life it should come from backend.
  private id = 1;

  // Get full set of employees
  getEmployees(): Employee[] {
    return this.employees;
  }

  // Add an employee into array and create unique id
  addEmployee(employee: Employee) {
    employee.id = this.id++;
    this.employees.push(employee);
  }

  // Delete an employee from array
  deleteEmployee(employee: Employee): Employee[] {
    this.employees = this.employees.filter(emp => emp.id !== employee.id);
    return this.employees;
  }
}
