import { IMeeting } from "../Interface/imeeting";
import { ISoftware } from "../Interface/isoftware";
import { IReport } from "../Interface/report_to_supervisor";
import { Colleague } from "./colleague";

export class Engineer implements IReport, IMeeting, ISoftware{
    colleague: Colleague;
    constructor(colleague: Colleague) {
        this.colleague = colleague
    }

    reportToSupervisor(): string {
        return "Я як інженер пишу звіти";
    }

    attendMeeting(): string {
        return "Я як інженер відвідую зустрічі";
    }

    developSoftware(): string {
        return "Я як інженер розроблюю ПЗ";
    }

    testSoftware(): string {
        return "Я як інженер тестую ПЗ";
    }
}
