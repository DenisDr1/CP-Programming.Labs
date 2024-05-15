import { AlertController } from '@ionic/angular';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Faculty } from '../myform/class/faculty';
import { ValidatorNameServiceService } from '../myform/service/validator-name-service.service';
import { ValidatorPhoneNumberServiceService } from '../myform/service/validator-phone-number-service.service';


@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent  implements OnInit {
  @Input() faculty!: Faculty;
  @Input() show: boolean = true;
  @Output() facultyChange: EventEmitter<Faculty> = new EventEmitter<Faculty>();
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private alertController: AlertController) { }

  validatePhone(phoneNumber: string): boolean {
    const validator = new ValidatorPhoneNumberServiceService();
    return validator.validate_phone_number(phoneNumber);
  }

  validateName(name: string): boolean {
    const validator = new ValidatorNameServiceService();
    return validator.validate_name(name);
  }

  save(name: any, deanName: any, phone: any, address: any): void {
    this.show = false;

    if (!this.validatePhone(phone)) {
      throw new Error("Некоректний телефонний номер");
    }

    if (!this.validateName(deanName)) {
      throw new Error("Некоректне ім'я декана");
    }

    this.faculty = new Faculty(name, deanName, phone, address, this.faculty.departments);
    
    this.facultyChange.emit(this.faculty);
    this.showChange.emit(this.show);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Помилка',
      subHeader: '',
      message: "Будь ласка, перевірте правильність введених даних.",
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {}


}
