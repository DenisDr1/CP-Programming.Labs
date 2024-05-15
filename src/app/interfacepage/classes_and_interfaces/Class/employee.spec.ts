import { Employee } from "./employee";

describe('Employee', () => {
    let employee: Employee;
  
    beforeEach(() => {
      employee = new Employee('Middle', 5000, 'example@example.com');
    });
  
    fit('should create', () => {
      expect(employee).toBeTruthy();
    });
  
    fit('should return position', () => {
      expect(employee.getPosition()).toBe('Middle');
    });
  
    fit('should return salary', () => {
      expect(employee.getSalary()).toBe(5000);
    });
  
    fit('should return corporate email', () => {
      expect(employee.getCorporateEmail()).toBe('example@example.com');
    });
  });