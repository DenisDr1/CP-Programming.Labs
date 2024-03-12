import { Vehicle } from "./vehicle";

export class Ship extends Vehicle
{
    numberOfPassengers!: number;
    homePort!: string;
    constructor(override name: string, numberOfPassengers: number, homePort: string) {
        super();
        this.numberOfPassengers = numberOfPassengers;
        this.homePort = homePort;
    }
    show() {
        return "Назва: " + this.name + ", " + "кількість пасажирів: " + this.numberOfPassengers + ", " + "порт приписки: " + this.homePort + ", " + "ціна: " + this.cost;
    }
    findTheValue () 
    {
        this.cost = 5 * this.numberOfPassengers * this.numberOfPassengers;
    }
}