import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from './city';
import { CityList } from './city-list';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Поточний вид
  currentCity = DEFAULT_CITY;
  // Обєкт-спостерігач
  city$: BehaviorSubject<City> = new BehaviorSubject<City>(DEFAULT_CITY);
  // Змін поточного виду на новий 
  setCity(t:City){
    console.log("Відбулась зміна");
    //генерація наступного значення
    this.city$.next(t);
  }
  constructor() { }
}

// Створення списку міст
var cityList = new CityList();
// Отримуємо початкове значення
const DEFAULT_CITY = cityList.city.get(0);
