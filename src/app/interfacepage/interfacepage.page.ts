import { ClerkReporter, ClerkMeeting, ClerkWorks, Clerk } from './classes_and_interfaces/Class/clerk';
import { Component, OnInit } from '@angular/core';
import { ShowConsole } from './classes_and_interfaces/Class/show_console';
import { ShowDesktop } from './classes_and_interfaces/Class/show_desktop';
import { Person } from './classes_and_interfaces/Class/person';
import { Skills } from './classes_and_interfaces/Class/skills';
import { Worker } from './classes_and_interfaces/Class/worker';
import { Employee } from './classes_and_interfaces/Class/employee';
import { Colleague } from './classes_and_interfaces/Class/colleague';
import { Engineer } from './classes_and_interfaces/Class/enginner';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }
  
  result() {
    let show_con = new ShowConsole();
    let show_desk = new ShowDesktop();

    let person_clerk_Alex = new Person("Alex", "Alex", "3800000000", 30);
    let softSkillsArray_Alex: string[] = ["skill 1", "skill 2", "skill 3"];
    let hardSkillsArray_Alex: string[] = ["skill 1", "skill 2", "skill 3"];
    let worker_clerk_Alex = new Employee("Middle", 1500, "Alex@email.com");
    let skills_clerk_Alex = new Skills(softSkillsArray_Alex, hardSkillsArray_Alex);
    let clerkReporter = new ClerkReporter();
    let clerkMeeting = new ClerkMeeting();
    let clerkWorks = new ClerkWorks();
    let clerk_Alex = new Clerk(person_clerk_Alex, worker_clerk_Alex, skills_clerk_Alex, show_con, clerkReporter, clerkMeeting, clerkWorks);
    clerk_Alex.showDetails(show_con);
    show_con.show(`
      ${clerk_Alex.attendMeeting()}
      ${clerk_Alex.workOnTask()}
      ${clerk_Alex.reportToSupervisor()}
    `);


    let person_employee_Anton = new Person("Anton", "Anton", "3800000000", 30);
    let softSkillsArray_Anton: string[] = ["skill 1", "skill 2", "skill 3"];
    let hardSkillsArray_Anton: string[] = ["skill 1", "skill 2", "skill 3"];
    let worker_clerk_Anton = new Employee("Middle", 1500, "Anton@email.com");
    let skills_clerk_Anton = new Skills(softSkillsArray_Anton, hardSkillsArray_Anton);
    let employee_Anton = new Colleague(person_employee_Anton, worker_clerk_Anton, skills_clerk_Anton, show_con);
    let worker_Anton = new Worker(employee_Anton);
    worker_Anton.colleague.showDetails(show_desk);
    this.show.push(show_desk.info);
    employee_Anton.showDetails(show_con);
    worker_Anton.performPhysicalWork();
    worker_Anton.reportToSupervisor();
    show_con.show(`
      ${worker_Anton.performPhysicalWork()}
      ${worker_Anton.reportToSupervisor()}
    `);

    let person_employee_Vladyslav = new Person("Vladyslav", "Vladyslav", "3800000000", 30);
    let softSkillsArray_Vladyslav: string[] = ["skill 1", "skill 2", "skill 3"];
    let hardSkillsArray_Vladyslav: string[] = ["skill 1", "skill 2", "skill 3"];
    let worker_clerk_Vladyslav = new Employee("Middle", 1500, "Vladyslav@email.com");
    let skills_clerk_Vladyslav = new Skills(softSkillsArray_Vladyslav, hardSkillsArray_Vladyslav);
    let employee_Vladyslav = new Colleague(person_employee_Vladyslav, worker_clerk_Vladyslav, skills_clerk_Vladyslav, show_desk);
    this.show.push(show_desk.info);
    let engineer_Vladyslav = new Engineer(employee_Vladyslav);
    engineer_Vladyslav.colleague.showDetails(show_con);
    employee_Vladyslav.showDetails(show_desk);
    this.show.push(show_desk.info);
    show_con.show(`
      ${engineer_Vladyslav.attendMeeting()}
      ${engineer_Vladyslav.developSoftware()}
      ${engineer_Vladyslav.reportToSupervisor()}
    `);

  }
}
