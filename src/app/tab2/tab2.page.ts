import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  res(a: any, b: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = 0;
      
      let i: number = a, p: number = 1;
      while(i <= this.b && i < 30) {
        if(i % 7 == 0)
          p *= i;
        i++;
      }
      this.c = p;
    }
    catch (error) {
      console.log(error)
    }
  }
}
