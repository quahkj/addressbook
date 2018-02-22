import { Component, OnInit } from '@angular/core';
import { Employee } from './employee/employee';
import {EmployeeService} from './employee/employee.service';

/*
 * This is the main component for this application. It manages all UI components and call service class
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: Employee[] = [];
  newEmployee: Employee = {id: 0, firstName: '', lastName: '', department: '', phone: ''};
  cols: any[];
  showAddEmployee: boolean;
  showDeleteEmployee: boolean;
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
      // Initialise the employee
      this.employees = this.employeeService.getEmployees();
      this.cols = [
        { field: 'firstName', header: 'First Name'},
        { field: 'lastName', header: 'Last Name'},
        { field: 'department', header: 'Department'},
        { field: 'phone', header: 'Phone'}
      ];
  }

  showAddEmployeeDialog() {
    this.newEmployee = new Employee('', '', '', '');
    this.showAddEmployee = true;
  }

  showDeleteEmployeeDialog() {
    this.showDeleteEmployee = true;
  }

  addEmployee() {
    this.showAddEmployee = false;
    this.employeeService.addEmployee(this.newEmployee);
  }

  deleteEmployee() {
    this.showDeleteEmployee = false;
    this.employees = this.employeeService.deleteEmployee(this.selectedEmployee);
  }

}
