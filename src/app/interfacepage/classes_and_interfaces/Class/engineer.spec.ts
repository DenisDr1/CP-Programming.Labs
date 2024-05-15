import { Engineer } from "./enginner";
import { Colleague } from "./colleague";
import { Person } from "./person";
import { Skills } from "./skills";
import { Employee } from "./employee";
import { ShowConsole } from "./show_console";

describe('Engineer', () => {
    let engineer: Engineer;
    let show_con: ShowConsole;

    beforeEach(() => {
        const person = new Person('John', 'John', '123-456-7890', 30);
        const softSkills = ['communication', 'teamwork'];
        const hardSkills = ['programming', 'problem solving'];
        const skills = new Skills(softSkills, hardSkills);
        const workerFromEmployee = new Employee('Middle', 5000, 'example@example.com');
        show_con = new ShowConsole();
        const colleague = new Colleague(person, workerFromEmployee, skills, show_con);
        engineer = new Engineer(colleague);
    });

    fit('should create an Engineer object', () => {
        expect(engineer).toBeTruthy();
    });

    fit('should report to supervisor', () => {
        const result = engineer.reportToSupervisor();
        expect(result).toBe("Я як інженер пишу звіти");
    });

    fit('should attend meetings', () => {
        const result = engineer.attendMeeting();
        expect(result).toBe("Я як інженер відвідую зустрічі");
    });

    fit('should develop software', () => {
        const result = engineer.developSoftware();
        expect(result).toBe("Я як інженер розроблюю ПЗ");
    });

    fit('should test software', () => {
        const result = engineer.testSoftware();
        expect(result).toBe("Я як інженер тестую ПЗ");
    });
});
