import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  eps: number = 1E-3;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }
  getRecursion(x: number, u: number, v: number, sum: number) {
    u *= x;
    let term = u / this.factorial(v);
    v++;
    sum += term;
    if (Math.abs(term) < this.eps) {
      this.yy = sum;
    }
    else {
      this.getRecursion(x, u, v, sum);
    }
  }
  private factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  getTab(xn: number = 0.5, xk: number = 3.1, h: number = 0.1) {
    let x = xn, y = 1.0;
    while (x <= xk) {
      this.getRecursion(x, 1, 1, y);
      this.xy.set(x, this.yy);
      if(this.logService)
        this.logService.write("x = " + x.toFixed(2) + " y = " + this.yy.toFixed(4));
      x += h;
    }
    return this.xy;
  }
}
