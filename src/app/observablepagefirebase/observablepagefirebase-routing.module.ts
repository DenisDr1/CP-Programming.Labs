import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablepagefirebasePage } from './observablepagefirebase.page';

const routes: Routes = [
  {
    path: '',
    component: ObservablepagefirebasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablepagefirebasePageRoutingModule {}
