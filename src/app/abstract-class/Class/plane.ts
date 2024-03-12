import { Vehicle } from "./vehicle";

export class Plane extends Vehicle
{
    h!: number;
    v!: number;
    constructor(override name: string, h: number, v: number) {
        super();
        this.h = h;
        this.v = v;
    }
    show() {
        return "Назва: " + this.name + ", " + "висота: " + this.h + ", " + "швидкість: " + this.v + ", " + "ціна: " + this.cost;
    }
    findTheValue () 
    {
        this.cost = 100 * this.h * this.v;
    }
}