import { TestBed } from '@angular/core/testing';
import { ValidatorNameServiceService } from './validator-name-service.service';

describe('ValidatorNameServiceService', () => {
  let service: ValidatorNameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorNameServiceService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return true for a valid name', () => {
    const validName = 'Андрій Андрій Андрійович';
    expect(service.validate_name(validName)).toBe(true);
  });

  fit('should return false for an invalid name', () => {
    const invalidName = 'john123';
    expect(service.validate_name(invalidName)).toBe(false);
  });
});
