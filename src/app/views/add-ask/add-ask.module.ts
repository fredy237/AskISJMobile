import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AddAskPageRoutingModule } from './add-ask-routing.module';

import { AddAskPage } from './add-ask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAskPageRoutingModule,
    FormsModule, ReactiveFormsModule,  
  ],
  declarations: [AddAskPage]
})
export class AddAskPageModule {}
