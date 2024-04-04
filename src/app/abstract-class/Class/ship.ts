import { Vehicle } from "./vehicle";

export class Ship extends Vehicle
{
    numberOfPassengers!: number;
    homePort!: string;
    constructor(name: string, numberOfPassengers: number, homePort: string) {
        if (numberOfPassengers < 1000 || numberOfPassengers > 3000) throw new Error('numberOfPassengers < 1000 or numberOfPassengers > 3000');
        if (/\d/.test(homePort) == false) throw new Error('homePort doesn\'t have a number');
        super(name);
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