import { Component, OnInit } from '@angular/core';
import { City } from './service/city';
import { CityList } from './service/city-list';
import { ConfigService } from './service/config.service';
import { Enterprise } from './service/enterprise';
import { EnterpriseList } from './service/enterpriseList';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {
  // Список міст
  cities = new CityList();
  // Сервіс для спостерігача
  private configService = new ConfigService();
  // Масив спостерігачів
  private subscriptions: Subscription[] = [];
  // Список підприємств
  enterpriseList = new EnterpriseList(this.configService);
  // Поточне місто
  city: City = new City();
  // Лічильник
  count = 0;

  constructor() {}

  ngOnInit() {
    // Оголошення спостерігача
    const citySub = this.configService.city$
      // Підписуємось на зміни та отримуємо поточне значення
      .subscribe(() => {
        // Отримуємо нове значення міста
        this.city = this.configService.city$.value;
        // Додаємо спостерігача до класу
        this.subscriptions.push(citySub);
      });
  }

  // Вибір наступного міста
  nextCity() {
    // Якщо є наступне місто у списку
    if (this.count < this.cities.city.size - 1) {
      // Збільшуємо лічильник
      this.count++;
    } else {
      // Інакше обнуляємо
      this.count = 0;
    }
    // Змінюємо місто у сервісі
    this.configService.setCity(this.cities.city.get(this.count));
  }

  // Додавання нового підприємства
  addEnterprise(name: any, date: any, address: any, type: any, occ: any) {
    let enterprise = new Enterprise();
    enterprise.name = name;
    enterprise.date = date;
    enterprise.address = address;
    enterprise.type = type;
    enterprise.occ = occ;
    enterprise.city_id = this.city.id;
    this.enterpriseList.add(enterprise);
  }

  // Додавання нового міста
  addCity(city: any) {
    let c = new City();
    c.id = this.cities.city.size;
    c.name = city;
    this.cities.add(c);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
