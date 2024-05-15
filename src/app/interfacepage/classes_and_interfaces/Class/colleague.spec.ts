import { IShow } from '../Interface/ishow';
import { Person } from './person';
import { Employee } from './employee';
import { Skills } from './skills';
import { ShowConsole } from './show_console';
import { Colleague } from "./colleague";

describe('Colleague', () => {
    let colleague: Colleague;
    let shower: IShow;
    let consoleSpy: jasmine.Spy;

    beforeEach(() => {
        let person = new Person('John', 'John', '123-456-7890', 30);
        let softSkills = ['communication', 'teamwork'];
        let hardSkills = ['programming', 'problem solving'];
        let skills = new Skills(softSkills, hardSkills);
        let employee = new Employee('Middle', 5000, 'example@example.com');
        shower = new ShowConsole();
        colleague = new Colleague(person, employee, skills, shower);
        consoleSpy = spyOn(console, 'log');
    });

    fit('should create an Employee object', () => {
        expect(colleague).toBeTruthy();
    });

    fit('should call show method with correct information', () => {
        let expectedString = `Name: John John
        Age: 30
        Phone number: 123-456-7890
        Position: Middle
        Salary: 5000
        Corporate Email: example@example.com
        Skills: communication, teamwork, programming, problem solving`;

        colleague.showDetails(shower);

        expect(consoleSpy).toHaveBeenCalledWith(expectedString);
    });
});
