import { IPerson } from '../Interface/iperson';
import { IEmployee } from '../Interface/iemployee';
import { ISkills } from "../Interface/iskills";
import { IShow } from "../Interface/ishow";

export class Colleague {

    constructor(private person: IPerson, private worker: IEmployee, private skills: ISkills, shower: IShow) {
        shower.show('Прізвище ' + this.person.getFullName() + ' Посада ' + this.worker.getPosition() + ' Корпоративна пошта ' + this.worker.getCorporateEmail())
    }
    showDetails(shower: IShow): void {
        shower.show(`Name: ${this.person.getFullName()}
        Age: ${this.person.getAge()}
        Phone number: ${this.person.getPhoneNumber()}
        Position: ${this.worker.getPosition()}
        Salary: ${this.worker.getSalary()}
        Corporate Email: ${this.worker.getCorporateEmail()}
        Skills: ${this.skills.getSkills().join(', ')}`);
    }
}
/*export class Employee {
    person: IPerson;
    worker: IWorker;
    skills: ISkills;

    constructor(person: IPerson, worker: IWorker, skills: ISkills, shower: IShow) {
        this.person = person;
        this.worker = worker;
        this.skills = skills;
        shower.show('Прізвище' + this.person.getFullName + 'Посада' + this.worker.getPosition + 'Корпоративна пошта' + this.worker.corporateEmail)
    }
    showDetails(): string {
    return `
        Name: ${this.person.getFullName()}
        Age: ${this.person.getAge()}
        Phone number: ${this.person.getPhoneNumber()}
        Position: ${this.worker.getPosition()}
        Salary: ${this.worker.getSalary()}
        Corporate Email: ${this.worker.getCorporateEmail()}
        Skills: ${this.skills.getSkills().join(', ')}
    `;
    }
}*/

/*
import { IPerson } from "../Interface/iperson";
import { IWorker } from "../Interface/iworker";
import { ISkills } from "../Interface/iskills";
import { IShow } from "../Interface/ishow";

export class Employee implements IPerson, IWorker, ISkills {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    age: number;
    position: string;
    salary: number;
    corporateEmail: string;
    softSkills: string[];
    hardSkills: string[];

    constructor(
        firstName: string,
        lastName: string,
        phoneNumber: string,
        age: number,
        position: string,
        salary: number,
        corporateEmail: string,
        softSkills: string[],
        hardSkills: string[],
        shower: IShow
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.position = position;
        this.salary = salary;
        this.corporateEmail = corporateEmail;
        this.softSkills = softSkills;
        this.hardSkills = hardSkills;
        shower.show('Прізвище' + this.firstName + 'Посада' + position + 'Корпоративна пошта' + corporateEmail)
    }

    getFullName(): string {
        return ${this.firstName} ${this.lastName};
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getAge(): number {
        return this.age;
    }

    getAllPersonalData(): string {
        return `
            Name: ${this.getFullName()}
            Age: ${this.getAge()}
            Phone number: ${this.getPhoneNumber()}
        `;
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

    getSkills(): string[] {
        return [...this.softSkills, ...this.hardSkills];
    }
}
*/