import { ClerkReporter, ClerkMeeting, ClerkWorks, Clerk } from "./clerk";
import { Person } from './person';
import { Employee } from './employee';
import { Skills } from './skills';
import { ShowConsole } from "./show_console";

describe('Clerk', () => {
    let clerk: Clerk;
    let clerkReporter: ClerkReporter;
    let clerkMeeting: ClerkMeeting;
    let clerkWorks: ClerkWorks;

    beforeEach(() => {
        let person_clerk_Alex = new Person("Alex", "Alex", "3800000000", 30);
        let softSkillsArray_Alex: string[] = ["skill 1", "skill 2", "skill 3"];
        let hardSkillsArray_Alex: string[] = ["skill 1", "skill 2", "skill 3"];
        let employee_clerk_Alex = new Employee("Middle", 1500, "Alex@email.com");
        let skills_clerk_Alex = new Skills(softSkillsArray_Alex, hardSkillsArray_Alex);
        clerkReporter = new ClerkReporter();
        clerkMeeting = new ClerkMeeting();
        clerkWorks = new ClerkWorks();
        let show_con = new ShowConsole()
        clerk = new Clerk(person_clerk_Alex, employee_clerk_Alex, skills_clerk_Alex, show_con, clerkReporter, clerkMeeting, clerkWorks);
    });

    fit('should create an Employee object', () => {
        expect(clerk).toBeTruthy();
    });

    fit('report to a supervisor', () => {
        expect(clerk.reportToSupervisor()).toBe(clerkReporter.reportToSupervisor());
    });
    fit('attend a meeting', () => {
        expect(clerk.attendMeeting()).toBe(clerkMeeting.attendMeeting());
    });
    fit('hold a meeting', () => {
        expect(clerk.holdMeeting()).toBe(clerkMeeting.holdMeeting());
    });
    fit('work on a task', () => {
        expect(clerk.workOnTask()).toBe(clerkWorks.workOnTask());
    });
    fit('test a task', () => {
        expect(clerk.testTask()).toBe(clerkWorks.testTask());
    });
});
