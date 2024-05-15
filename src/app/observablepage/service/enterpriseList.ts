import { ConfigService } from "./config.service";
import { Enterprise } from "./enterprise";

export class EnterpriseList {
  // Масив зі списком підприємств
  enterpriseList: Enterprise[] = [];
  // Масив з результами пошуку
  searchEnterprise: Enterprise[] = [];
  // Відкритий масив рядків з результатом пошуку
  searchEnterpriseResult: string[] = [];
  // Сервіс для спостереження за змінами міста
  citySub = this.configService.city$
    // Підписуємось на зміни
    .subscribe(() => {
      // Отримуємо нове значення міста
      let city = this.configService.city$.value;
      // Якщо зміни відбулись, шукаємо усі підприємства
      this.search(city.id);
    });

  // Ініціалізація початкових значень
  constructor(private configService: ConfigService) {
    let enterprise = new Enterprise();
    enterprise.name = "Підприємство А";
    enterprise.date = "15.02.23";
    enterprise.address = "Київ, вул. Хрещатик, 1";
    enterprise.type = "Тип 1";
    enterprise.occ = "Національне підприємство";
    enterprise.city_id = 0;
    this.add(enterprise);

    let enterprise1 = new Enterprise();
    enterprise1.name = "Підприємство Б";
    enterprise1.date = "15.03.23";
    enterprise1.address = "Київ, вул. Грушевського, 5";
    enterprise1.type = "Тип 2";
    enterprise1.occ = "Закордонне підприємство";
    enterprise1.city_id = 1;
    this.add(enterprise1);
  }

  // Додавання підприємства
  add(e: Enterprise) {
    this.enterpriseList.push(e);
    this.search(e.city_id);
  }

  // Пошук підприємства
  search(id: number) {
    let c: number = 0;
    this.searchEnterprise = this.enterpriseList.filter((enterprise) => {
      return enterprise.city_id === id;
    });
    this.searchEnterpriseResult = [];
    this.searchEnterprise.forEach(el => {
      this.searchEnterpriseResult.push('Підприємство №' + c);
      this.searchEnterpriseResult.push('Назва: ' + el.name);
      this.searchEnterpriseResult.push('Адреса: ' + el.address);
      this.searchEnterpriseResult.push('Тип: ' + el.type);
      this.searchEnterpriseResult.push('Діяльність: ' + el.occ);
      this.searchEnterpriseResult.push('Дата створення: ' + el.date);
      c++;
    });
  }
}
