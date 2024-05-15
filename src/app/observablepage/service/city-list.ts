import { City } from "./city";

export class CityList {
    city = new Map();
    constructor () {
        this.city.set(0, {id:0, name:'City1'});
        this.city.set(1, {id:1, name:'City2'});
    }
    add(city: City) {
        this.city.set(city.id, {id: city.id, name: city.name});
    }
}