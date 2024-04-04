export abstract class Vehicle {
    name!: string;
    cost!: number;
    constructor(name: string) {
        this.name = name;
    }
    abstract show(): any;
    abstract findTheValue(): any;
}