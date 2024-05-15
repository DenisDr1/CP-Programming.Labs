import { Component, OnInit } from '@angular/core';
import { Faculty } from '../myform/class/faculty';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {
  showEditForm: boolean = false;
  faculties: Faculty[] = [];

  constructor() {}

  ngOnInit() {}

  addFaculty(event: any) {
    if (event instanceof Faculty) {
      let faculty: Faculty = event;
      this.faculties.push(faculty);
      console.log(this.faculties);
    } else {
      throw new Error("Error of type");
    }
  }

  update(){
    this.showEditForm = true;
  }

  showUp(event: any){
    if (typeof event === "boolean") {
      this.showEditForm = event;
    } else 
    throw new Error("Error of type");
  }

  update_save(event:any, i:number) {
    if (event as Faculty){
      this.faculties[i] = event;
    } else 
    throw new Error("Error of type");
  }

}
