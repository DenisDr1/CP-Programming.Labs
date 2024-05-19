import { City } from "./city";

export class CityList {
    city = new Array();
    constructor () {}
    add(city: City) {
        this.city.push(city);
    }
}