import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,
  Validators, } from '@angular/forms';

import { Ask } from 'src/app/model/ask.model';
import { AskService } from 'src/app/services/ask/ask.service';


@Component({
  selector: 'app-add-ask',
  templateUrl: './add-ask.page.html',
  styleUrls: ['./add-ask.page.scss'],
})
export class AddAskPage implements OnInit {
  typeChoice= 0 
  askForm: FormGroup;
  ask: Ask;
  document: any;
  documentEvent: any;

  typeAsks=[
    {
      id:1,
      nom:"Absence"
    },
    {
      id:2,
      nom:"Revendication"
    },
    {
      id:3,
      nom:" Certificat de scolarité"
    },
    {
      id:4,
      nom:"Moratoire"
    }];

    typeAbsences=[
      {
        id:1,
        nom:" Demande d'Absence"
      },
      {
        id:2,
        nom:"Justification d'absence"
      },
      ]
  

  constructor( private fb: FormBuilder,
    public askService: AskService) { 
     
      this.ask = new Ask({});
   
      this.askForm = this.createContactForm();
  }

  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);


  ngOnInit() {
  }

  
  choice(selectedValue: any){
    this.typeChoice =selectedValue.target.value;
    console.log('Selected', selectedValue.target.value);
   
  }

  createContactForm(): FormGroup {
    // absence
    
      return this.fb.group({
     
     
        reason: [this.ask.reason],
        typeAbsence: [this.ask.type],
        date:[this.ask.startDate],
        subject: [this.ask.course],
        obtainedMark: [this.ask.obtained],
        wishedMark:[this.ask.claimed],
        amount:[this.ask.amount],
        typeAsk:[this.ask.staff],
        
        
      });
   


    }
  
    fileSelected(documentEvent){
      this.document = documentEvent.target.files[0];
      console.log(this.document)
    }
  
  onSubmit(){
  
    
    if(this.typeChoice == 1){
    
  this.ask.reason = this.askForm.get('reason').value ;
  this.ask.type = this.askForm.get('typeAbsence').value;
  this.ask.startDate = this.askForm.get('date').value;
  this.ask.type ="ABSENCE"
  this.ask.document= this.document;
  this.askService.addAsk(this.ask).subscribe(data => {
  },error => {
  
  });
    }else{
      if(this.typeChoice == 2){
    
        this.ask.course = this.askForm.get('subject').value ;
       this.ask.obtained= this.askForm.get('obtainedMark').value ;
      this.ask.claimed= this.askForm.get('wishedMark').value ;
      this.ask.type ="REVENDICATION"
      this.ask.document= this.document;
        this.askService.addAsk(this.ask).subscribe(data => {
        },error => {
        
        });
          }else{
            if(this.typeChoice == 3){
              this.ask.type ="CERTIFICAT DE SCOLARITE"
              this.askService.addAsk(this.ask).subscribe(data => {
              },error => {
              
              });
                }else{
                  if(this.typeChoice == 4){
    
                    this.ask.amount= this.askForm.get('amount').value ;
                    this.ask.datePayment= this.askForm.get('date').value ;
                    this.ask.document= this.document;
                    this.ask.type ="MORATOIRE"
                    this.askService.addAsk(this.ask).subscribe(data => {
                    },error => {
                    
                    });
                      }
                }
          }

    }
  
  }
  

}
