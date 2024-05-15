import { Person } from "./person";
import { Employee } from "./employee";
import { Skills } from "./skills";
import { Colleague } from "./colleague";
import { ShowConsole } from "./show_console";
import { IShow } from "../Interface/ishow";
import { Worker } from "./worker";

describe('Worker', () => {
    let worker: Worker;
    let show_con: IShow;

    beforeEach(() => {
        let person = new Person('John', 'John', '123-456-7890', 30);
        let softSkills = ['communication', 'teamwork'];
        let hardSkills = ['programming', 'problem solving'];
        let skills = new Skills(softSkills, hardSkills);
        let employee = new Employee('Middle', 5000, 'example@example.com');
        show_con = new ShowConsole();
        let colleague = new Colleague(person, employee, skills, show_con);
        worker = new Worker(colleague);
    });

    fit('should create an Employee object', () => {
        expect(worker).toBeTruthy();
    });

    fit('should report to supervisor', () => {
        expect(worker.reportToSupervisor()).toBe("Я як працівник пишу звіти");
    });

    fit('should attend meetings', () => {
        expect(worker.attendMeeting()).toBe("Я як працівник відвідую зустрічі");
    });

    fit('should perform physical work', () => {
        expect(worker.performPhysicalWork()).toBe("Я як працівник виконую фізичну роботу");
    });
});
