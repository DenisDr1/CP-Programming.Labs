import { Ship } from './ship';

describe('Ship Testing', () => {
  let ship: Ship;

  beforeEach(() => {
    ship = new Ship("Корабель", 2000, "Корабель 1");
  });

  fit('should create', () => {
    expect(ship).toBeTruthy();
  });

  fit('should be created with fewer than 1000 passengers(numberOfPassengers)', () => {
    expect(() => new Ship('Корабель', 900, "Корабель 2")).toThrow(new Error('numberOfPassengers < 1000 or numberOfPassengers > 3000'));
  });

  fit('should be created with more than 3000 passengers(numberOfPassengers)', () => {
    expect(() => new Ship('Корабель', 4000, "Корабель 2")).toThrow(new Error('numberOfPassengers < 1000 or numberOfPassengers > 3000'));
  });

  fit('homePorst(home port) should be identified a number', () => {
    expect(() => new Ship('Літак', 2000, "Корабель")).toThrow(new Error('homePort doesn\'t have a number'));
  });

  fit('price calculation with numberOfPassengers = 2000', () => {
    ship.findTheValue();
    let expected_cost = ship.cost;
    let cost = 5 * 2000 * 2000;
    expect(expected_cost).toBe(cost)
  });
});
