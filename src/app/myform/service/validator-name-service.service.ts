import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorNameServiceService {
  validate_name(name: string): boolean{
    return /^[A-ZА-ЯІЇЄ][a-zа-яіїє']+\s[A-ZА-ЯІЇЄ][a-zа-яіїє']+\s[A-ZА-ЯІЇЄ][a-zа-яіїє']+$/.test(name);
  }
  constructor() { }
}
