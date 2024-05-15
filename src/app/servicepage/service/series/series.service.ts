import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  eps: number = 1E-3;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getSeries(x: number) {
    let u = x;
    let v = 1;
    let sum = 1;
    while (true) {
        let term = u / this.factorial(v);
        v++;
        sum += term;
        if (Math.abs(term) < this.eps) {
            break;
        }
        u *= x;
    }
    return sum;
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
      y = this.getSeries(x);
      this.xy.set(x, y);
      if(this.logService)
        this.logService.write("x = " + x.toFixed(2) + " y = " + y.toFixed(4));
      x += h;
    }
    return this.xy;
  }
}
