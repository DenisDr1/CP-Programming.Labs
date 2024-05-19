import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservablepagefirebasePageRoutingModule } from './observablepagefirebase-routing.module';

import { ObservablepagefirebasePage } from './observablepagefirebase.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservablepagefirebasePageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ObservablepagefirebasePage]
})
export class ObservablepagefirebasePageModule {}
