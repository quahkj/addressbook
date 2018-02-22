export  class Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  phone: string;

  constructor(firstName: string, lastName: string, department: string, phone: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.phone = phone;
  }
}
