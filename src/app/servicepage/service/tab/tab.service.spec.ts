import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('tabulating the function at x = 0.5 and y = 1.648721271', () => {
    let x = 0.5;
    let y = 1.648721271;
    let xy = service.getTab();
    let y1: number | undefined = 0;
    y1 = xy.get(x);
    if (y1 !== undefined)
      expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });
});
