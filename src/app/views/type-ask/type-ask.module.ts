import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeAskPageRoutingModule } from './type-ask-routing.module';

import { TypeAskPage } from './type-ask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeAskPageRoutingModule
  ],
  declarations: [TypeAskPage]
})
export class TypeAskPageModule {}
