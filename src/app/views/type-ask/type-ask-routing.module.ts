import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeAskPage } from './type-ask.page';

const routes: Routes = [
  {
    path: '',
    component: TypeAskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeAskPageRoutingModule {}
