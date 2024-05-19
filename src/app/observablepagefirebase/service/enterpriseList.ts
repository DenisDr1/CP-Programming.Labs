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
  constructor(private configService: ConfigService) {}

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
  }
}
