import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
    enginePower: number;
    fuelConsumption: number;

    constructor(name: string, enginePower: number, fuelConsumption: number) {
        super(name);
        if (enginePower < 60 || enginePower > 500) throw new Error('enginePower < 60 or enginePower > 500');
        if (fuelConsumption < 5 || fuelConsumption > 100) throw new Error('fuelConsumption < 5 or fuelConsumption > 100');
        this.enginePower = enginePower;
        this.fuelConsumption = fuelConsumption;
    }

    show() {
        return "Назва: " + this.name + ", " + "потужність двигуна: " + this.enginePower + ", " + "витрати палива: " + this.fuelConsumption + ", " + "ціна: " + this.cost;
    }

    findTheValue () 
    {
        this.cost = 3 * this.enginePower - this.fuelConsumption;
    }
}