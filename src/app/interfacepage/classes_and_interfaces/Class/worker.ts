import { IMeeting } from "../Interface/imeeting";
import { IWork } from "../Interface/iwork";
import { IReport } from "../Interface/report_to_supervisor";
import { Colleague } from "./colleague";

export class Worker implements IReport, IMeeting, IWork {
    colleague: Colleague;

    constructor(colleague: Colleague) {
        this.colleague = colleague;
    }

    reportToSupervisor(): string {
        return "Я як працівник пишу звіти";
    }

    attendMeeting(): string {
        return "Я як працівник відвідую зустрічі";
    }

    performPhysicalWork(): string {
        return "Я як працівник виконую фізичну роботу";
    }
}
