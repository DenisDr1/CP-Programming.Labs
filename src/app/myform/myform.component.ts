import { Faculty } from './class/faculty';
import { Component, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { phoneNumberValidator } from './service/phoneNumberValidator';
import { AlertController } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { ValidatorNameServiceService } from './service/validator-name-service.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  facultyForm!: FormGroup;
  faculty!: Faculty;
  @Output() facultyAdded: EventEmitter<Faculty> = new EventEmitter<Faculty>();

  constructor(private fb: FormBuilder, private alertController: AlertController) { 
    this.facultyForm = this.fb.group({
      facultyName: ['', [Validators.required]],
      deanName: ['', [Validators.required]],
      phone: ['', [phoneNumberValidator()]],
      address: ['', [Validators.required]],
      departments: new FormArray([new FormControl()]),
    });
  }

  // Додавання кафедри
  addDepartment() {
    console.log("Додати кафедру");
    (this.facultyForm.controls['departments'] as FormArray).push(new FormControl());
  }

  // Видалення кафедри
  deleteDepartment(index: any) {
    console.log('Видалити кафедру');
    (this.facultyForm.controls['departments'] as FormArray).removeAt(index);
  }

  // Повернення списку кафедр як FormArray
  getDepartmentsControls() {
    return (this.facultyForm.get('departments') as FormArray).controls;
  }

  // Збереження форми факультету
  onSubmit() {
    let facultyName = this.facultyForm.value.facultyName;
    let deanName = this.facultyForm.value.deanName;
    let phone = this.facultyForm.value.phone;
    let address = this.facultyForm.value.address;
    let departments = this.facultyForm.value.departments;
    let valid = new ValidatorNameServiceService;
    if (valid.validate_name(deanName)) {
      console.log('Submit');
      this.faculty = new Faculty(facultyName, deanName, phone, address, departments);
      console.log(this.faculty);
      this.facultyAdded.emit(this.faculty);
    }
    else
      this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Помилка',
      subHeader: '',
      message: "Будь ласка, перевірте правильність введеного ПІБ.",
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {}

}
