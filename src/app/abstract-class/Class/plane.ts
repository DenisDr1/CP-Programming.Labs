import { Vehicle } from "./vehicle";

export class Plane extends Vehicle {
    h: number;
    v: number;

    constructor(name: string, h: number, v: number) {
        super(name);
        if (h < 8 || h > 11) throw new Error('h < 8 or h > 11');
        if (v < 700 || v > 900) throw new Error('v < 700 or v > 900');
        this.h = h;
        this.v = v;
    }

    show() {
        return "Назва: " + this.name + ", " + "висота: " + this.h + ", " + "швидкість: " + this.v + ", " + "ціна: " + this.cost;
    }

    findTheValue () {
        this.cost = 100 * this.h * this.v;
    }
}
