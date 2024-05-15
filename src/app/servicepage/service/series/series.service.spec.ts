import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('at x = 0.9 y = 1,648721271', () => {
    let x = 0.9;
    let y = 2.459603111;
    let res = service.getSeries(x);
    expect(res.toFixed(2)).toBe(y.toFixed(2));
  });
});
