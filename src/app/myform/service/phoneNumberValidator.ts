import { ValidatorPhoneNumberServiceService } from './validator-phone-number-service.service';
import { AbstractControl, ValidatorFn } from "@angular/forms";

export function phoneNumberValidator(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key:string]:boolean} | null => {
        let validator = new ValidatorPhoneNumberServiceService;
        let valid = validator.validate_phone_number(control.value)
        return valid ? null : {number:true}
    }
}