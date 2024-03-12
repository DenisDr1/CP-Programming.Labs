export abstract class Vehicle {
    name!: string;
    cost!: number;
    constructor() {}
    abstract show(): any;
    abstract findTheValue(): any;
}