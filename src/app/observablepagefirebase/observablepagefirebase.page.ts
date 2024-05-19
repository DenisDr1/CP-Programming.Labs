import { FirebaseService } from './service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { City } from './service/city';
import { CityList } from './service/city-list';
import { ConfigService } from './service/config.service';
import { Enterprise } from './service/enterprise';
import { EnterpriseList } from './service/enterpriseList';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-observablepagefirebase',
  templateUrl: './observablepagefirebase.page.html',
  styleUrls: ['./observablepagefirebase.page.scss'],
})
export class ObservablepagefirebasePage implements OnInit {
  // Список міст
  cities = new CityList();
  // Сервіс для спостерігача
  private configService = new ConfigService();
  // Масив спостерігачів
  private subscriptions: Subscription[] = [];
  // Список підприємств
  enterpriseList = new EnterpriseList(this.configService);
  // Поточне місто
  city: City = new City;
  // Лічильник
  count = 0;
  // Змінні дл БД
  bdEnterprise = "Enterprise";
  bdCity = "City";

  constructor(public fbService:FirebaseService) { }

  ngOnInit() {
    // Підключення до бд
    this.fetchTask(this.bdEnterprise, true);
    // Отримання списку підприємств
    let TaskRes = this.fbService.getRecordList(this.bdEnterprise, true);
    TaskRes.snapshotChanges().subscribe();
    // Отримання списку міст
    this.fetchTask(this.bdCity, false);
    let TaskRes1 = this.fbService.getRecordList(this.bdCity, false);
    TaskRes.snapshotChanges().subscribe();
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

  // Функція для отрмання списку з БД
  fetchTask(bd:any, op:any){
    this.fbService.getRecordList(bd,op).valueChanges().subscribe(res => {
      console.log(res)
      if (op) this.enterpriseList.enterpriseList = res;
      else {
        this.cities.city = res;
        this.city = this.cities.city[this.count];
        this.enterpriseList.search(this.city.id);
      }
    })
  }

  // Вибір наступного міста
  nextCity() {
    // Якщо є наступне місто у списку
    if (this.count < this.cities.city.length - 1) {
      // Збільшуємо лічильник
      this.count++;
    } else {
      // Інакше обнуляємо
      this.count = 0;
    }
    // Змінюємо місто у сервісі
    this.configService.setCity(this.cities.city[this.count]);
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
    // Cтворення нового підприємства у БД
    this.fbService.createEnterprise(enterprise);
    this.enterpriseList.search(this.city.id);
    this.enterpriseList.add(enterprise);
  }

  // Додавання нового міста
  addCity(city: any) {
    let c = new City();
    c.id = this.cities.city.length + 1;
    c.name = city;
    this.fbService.createCity(c);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


}
