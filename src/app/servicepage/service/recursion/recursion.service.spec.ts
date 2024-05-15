import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('at x = 0.9 y = 1,648721271', () => {
    let x = 0.9;
    let y = 2.459603111;
    let res = 1;
    service.getRecursion(x, 1, 1, res);
    expect(service.yy.toFixed(2)).toBe(y.toFixed(2));
  });
});
