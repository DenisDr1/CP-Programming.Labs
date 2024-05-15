import { TestBed } from '@angular/core/testing';
import { ValidatorPhoneNumberServiceService } from './validator-phone-number-service.service';

describe('ValidatorPhoneNumberServiceService', () => {
  let service: ValidatorPhoneNumberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPhoneNumberServiceService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return true for a valid phone number', () => {
    const validPhoneNumber = '+380501234567';
    expect(service.validate_phone_number(validPhoneNumber)).toBe(true);
  });

  fit('should return false for an invalid phone number', () => {
    const invalidPhoneNumber = '1234567890';
    expect(service.validate_phone_number(invalidPhoneNumber)).toBe(false);
  });
});
