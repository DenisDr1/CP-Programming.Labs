import { Person } from "./person";

describe ('Person', () => {
    let person: Person;

    beforeEach(() => {
        person = new Person('John', 'John', '123-456-7890', 30);
    });

    fit('should create', () => {
        expect(person).toBeTruthy();
    });

    fit('should return full name', () => {
        expect(person.getFullName()).toBe('John John');
    });
    
    fit('should return phone number', () => {
        expect(person.getPhoneNumber()).toBe('123-456-7890');
    });
    
    fit('should return age', () => {
        expect(person.getAge()).toBe(30);
    });

    fit('should return all personal data', () => {
        expect(person.getAllPersonalData()).toContain('John John');
        expect(person.getAllPersonalData()).toContain('123-456-7890');
        expect(person.getAllPersonalData()).toContain('30');
    });
});