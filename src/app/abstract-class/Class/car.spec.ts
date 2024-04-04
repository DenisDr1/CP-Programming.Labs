import { Car } from './car';

describe('Car Testing', () => {
  let car: Car;

  beforeEach(() => {
    car = new Car('Машина', 70, 10);
  });

  fit('should create', () => {
    expect(car).toBeTruthy();
  });

  fit('should be created with an enginePower of less than 60', () => {
    expect(() => new Car('Машина', 50, 10)).toThrow(new Error('enginePower < 60 or enginePower > 500'));
  });

  fit('should be created with an enginePower of more than 500', () => {
    expect(() => new Car('Машина', 600, 10)).toThrow(new Error('enginePower < 60 or enginePower > 500'));
  });

  fit('should be created with a fuelConsumption of less than 5', () => {
    expect(() => new Car('Машина', 70, 4)).toThrow(new Error('fuelConsumption < 5 or fuelConsumption > 100'));
  });

  fit('should be created with a fuelConsumption of more than 100', () => {
    expect(() => new Car('Машина', 70, 110)).toThrow(new Error('fuelConsumption < 5 or fuelConsumption > 100'));
  });

  fit('price calculation with enginePower = 70, fuelConsumption = 10', () => {
    car.findTheValue();
    let expected_cost = car.cost;
    let cost =  3 * 70 - 10;
    expect(expected_cost).toBe(cost);
  });
});
