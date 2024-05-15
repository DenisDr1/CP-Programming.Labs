import { IEmployee } from "../Interface/iemployee";

export class Employee implements IEmployee {
    position: string;
    salary: number;
    corporateEmail: string;

    constructor(position: string, salary: number, corporateEmail: string) {
        this.position = position;
        this.salary = salary;
        this.corporateEmail = corporateEmail;
    }

    getPosition(): string {
        return this.position;
    }

    getSalary(): number {
        return this.salary;
    }

    getCorporateEmail(): string {
        return this.corporateEmail;
    }
}