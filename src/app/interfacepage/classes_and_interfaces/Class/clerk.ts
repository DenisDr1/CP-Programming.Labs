import { ITask } from './../Interface/itask';
import { IMeeting } from './../Interface/imeeting';
import { IReport } from '../Interface/report_to_supervisor';
import { Colleague } from './colleague';
import { IPerson } from '../Interface/iperson';
import { ISkills } from '../Interface/iskills';
import { IEmployee } from '../Interface/iemployee';
import { IShow } from '../Interface/ishow';

export class Clerk extends Colleague {
    constructor(
        person: IPerson, 
        worker: IEmployee, 
        skills: ISkills, 
        shower: IShow, 
        private connectionClerkReporter: ConnectionClerkReporter,
        private connectionClerkMeeting: ConnectionClerkMeeting,
        private connectionClerkWorks: ConnectionClerkWorks) {
            super(person, worker, skills, shower);
        }
    reportToSupervisor() {
        return this.connectionClerkReporter.reportToSupervisor();
    }
    attendMeeting() {
        return this.connectionClerkMeeting.attendMeeting();
    }
    holdMeeting() {
        return this.connectionClerkMeeting.holdMeeting();
    }
    workOnTask() {
        return this.connectionClerkWorks.workOnTask();
    }
    testTask() {
        return this.connectionClerkWorks.testTask();
    }
}

interface ConnectionClerkReporter {
    reportToSupervisor(): any;
}

export class ClerkReporter implements IReport, ConnectionClerkReporter {
    reportToSupervisor(): string {
        return "Я як службовець роблю звіти";
    }
}

interface ConnectionClerkMeeting {
    attendMeeting(): string;
    holdMeeting(): string;
}

export class ClerkMeeting implements IMeeting, ConnectionClerkMeeting {
    attendMeeting(): string {
        return "Я як службовець відвідую засідання";
    }

    holdMeeting(): string {
        return "Я як службовець проводжу засідання";
    }
}

interface ConnectionClerkWorks {
    workOnTask(): string;
    testTask(): string;
}

export class ClerkWorks implements ITask, ConnectionClerkWorks {
    workOnTask(): string {
        return "Я як службовець працюю над завданням";
    }

    testTask(): string {
        return "Я як службовець перевіряю завдання";
    }
}
