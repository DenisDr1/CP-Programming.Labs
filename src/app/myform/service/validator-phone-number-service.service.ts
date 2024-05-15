import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPhoneNumberServiceService {
  validate_phone_number(phone_number: string): boolean{
    return /(?:\(\d{3}\) \d{3}\-\d{2}\-\d{2}|\+38(?:050|067|069)\d{7})$/.test(phone_number);
  }
  constructor() { }
}
