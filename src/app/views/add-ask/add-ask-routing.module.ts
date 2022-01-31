import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAskPage } from './add-ask.page';

const routes: Routes = [
  {
    path: '',
    component: AddAskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAskPageRoutingModule {}
