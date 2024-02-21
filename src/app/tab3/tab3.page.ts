import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor() {}
  a: number[][] = [];
  n: number = 0;
  sum: number = 0;
  matrixRes(n: any) {
    this.a = [];
    try {
      this.n = parseInt(n);
      if (isNaN(this.n) == true)
        throw new Error('Parameter is not a number!')
      if (n <= 0)
        throw new Error('Parameter is less than zero!')
      
      let i: number = 0, j: number = 0, temp_sum: number = 0;
      this.a = Array(this.n);
      console.log("Array created");
      for (i = 0; i < this.n; i++) {
        this.a[i] = Array(this.n);
        for(j = 0;j < this.n; j++) {
          let aa: number = i + j;
          this.a[i][j] = aa;
          if (i == j) {
            temp_sum += aa;
          }
        }
      }

      this.sum = temp_sum;
    }
    catch (error) {
      console.log(error);
    }
  }
  isMainDiagonal(i: number, j: number) {
    return i == j;
  }
  ngOnInit(){}
}
