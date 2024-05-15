import { IPerson } from "../Interface/iperson";

export class Person implements IPerson {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    age: number;

    constructor(firstName: string, lastName: string, phoneNumber: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
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
}