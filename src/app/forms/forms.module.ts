import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsPageRoutingModule } from './forms-routing.module';

import { FormsPage } from './forms.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { MyformComponent } from '../myform/myform.component';
import { UpdateformComponent } from '../updateform/updateform.component';
import { ViewformComponent } from '../viewform/viewform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsPageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  declarations: [FormsPage, MyformComponent, ViewformComponent, UpdateformComponent]
})
export class FormsPageModule {}
