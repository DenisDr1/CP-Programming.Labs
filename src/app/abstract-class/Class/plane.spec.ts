import { Plane } from './plane';

describe('Plane Testing', () => {
  let plane: Plane;

  beforeEach(() => {
    plane = new Plane("Літак", 9, 810);
  });

  fit('should create', () => {
    expect(plane).toBeTruthy();
  });

  fit('should be created with an h (height) of less than 8', () => {
    expect(() => new Plane('Літак', 5, 700)).toThrow(new Error('h < 8 or h > 11'));
  });

  fit('should be created an h(height) of more than 11', () => {
    expect(() => new Plane('Літак', 12, 700)).toThrow(new Error('h < 8 or h > 11'));
  });

  fit('should be created with a v(speed) of less than 700', () => {
    expect(() => new Plane('Літак', 8, 500)).toThrow(new Error('v < 700 or v > 900'));
  });

  fit('should be created with a v(speed) of more than 900', () => {
    expect(() => new Plane('Літак', 8, 1000)).toThrow(new Error('v < 700 or v > 900'));
  });

  fit('price calculation with h(height) = 9, v(speed) = 810', () => {
    plane.findTheValue();
    let expected_cost = plane.cost;
    let cost = 100 * 9 * 810;
    expect(expected_cost).toBe(cost)
  });
});
