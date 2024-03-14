import { Component, OnInit } from '@angular/core';
import { Vehicle } from './Class/vehicle';
import { Plane } from './Class/plane';
import { Ship } from './Class/ship';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  // Поліморфний контейнер
  vehicle: Vehicle[] = [];
  averageValueForPlanes: number = 0;
  numberOfPlanes: number = 0;
  averageValueForShips: number = 0;
  numberOfShips: number = 0;
  constructor() { }
  getRandomInt(a: number, b: number) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  getRandomHomePort() {
    return "Home " + this.getRandomInt(1, 20);
  }
  result(inputNumber: any) {
    this.vehicle = new Array();
    let n = parseInt(inputNumber);
    for (let i = 0; i < n; i++) {
      this.vehicle.push(new Plane("Літак", this.getRandomInt(8, 11), this.getRandomInt(700, 900)));
      this.vehicle.push(new Ship("Корабель", this.getRandomInt(1000, 3000), this.getRandomHomePort()));
    }
    this.vehicle.forEach((elemnt) => {
      elemnt.findTheValue();
      if (elemnt instanceof Plane) {
        this.averageValueForPlanes += elemnt.cost;
        this.numberOfPlanes += 1;
      }
      else if(elemnt instanceof Ship){
        this.averageValueForShips += elemnt.cost;
        this.numberOfShips += 1;
      }
    }
    );
    this.averageValueForPlanes /= this.numberOfPlanes;
    this.averageValueForShips /= this.numberOfShips;
  }

  ngOnInit() {
  }

}
