import { Component, NgIterable, OnInit } from '@angular/core';


import { Ask } from 'src/app/model/ask.model';
import { AskService } from 'src/app/services/ask/ask.service';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.page.html',
  styleUrls: ['./ask.page.scss'],
})
export class AskPage implements OnInit {
  demandes: any;
  search: any;
  constructor( private askService : AskService) {
   
   }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
   console.log('test ion view')
  this.demandes= this.askService.getAllAsks();
  if (!this.demandes.empty()){
    console.log('fredy')
  }
 
  
  }

}
