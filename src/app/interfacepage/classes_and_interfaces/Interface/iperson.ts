export interface IPerson {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    age: number;

    getFullName(): string;
    getPhoneNumber(): string;
    getAge(): number;
    getAllPersonalData(): string;
}