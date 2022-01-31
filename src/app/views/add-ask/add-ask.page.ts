import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,
  Validators, } from '@angular/forms';
import { Certificate } from 'src/app/model/certificate.model';
import { Absence } from 'src/app/model/absence.model';

import { Ask } from 'src/app/model/ask.model';
import { Revendication } from 'src/app/model/revendication.model';
import { AbsenceService } from 'src/app/services/absence/ask.service';
import { Moratoire } from 'src/app/model/moratoire.model';


@Component({
  selector: 'app-add-ask',
  templateUrl: './add-ask.page.html',
  styleUrls: ['./add-ask.page.scss'],
})
export class AddAskPage implements OnInit {
  typeChoice= 0 
  askForm: FormGroup;
  absence: Absence;
  certificate: Certificate;
  revendication: Revendication;
  moratoire: Moratoire;
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
    public absenceService: AbsenceService) { 
     
      this.absence = new Absence({});
      this.revendication = new Revendication({})
      this.certificate = new Certificate({})
      this.moratoire = new Moratoire({})
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
     
     
        motif: [this.absence.motif],
        typeAbsence: [this.absence.type],
        date:[this.absence.dateAbsence],
        subject: [this.revendication.subject],
        obtainedMark: [this.revendication.obtainedMark],
        wishedMark:[this.revendication.wishedMark],
        amount:[this.moratoire.amount],
        typeAsk:[this.absence.service],
        
        
      });
   


    }
  
    fileSelected(documentEvent){
      this.document = documentEvent.target.value;
      
    }
  
  onSubmit(){
  
    
    if(this.typeChoice == 1){
    
  this.absence.motif = this.askForm.get('motif').value ;
  this.absence.type = this.askForm.get('typeAbsence').value;
  this.absence.dateAbsence = this.askForm.get('date').value;
  this.absence.image= this.document;
  this.absenceService.addAsk(this.absence).subscribe(data => {
  },error => {
  
  });
    }else{
      if(this.typeChoice == 2){
    
        this.revendication.subject = this.askForm.get('subject').value ;
       this.revendication.obtainedMark= this.askForm.get('obtainedMark').value ;
      this.revendication.wishedMark= this.askForm.get('wishedMark').value ;
      this.revendication.image= this.document;
        this.absenceService.addAsk(this.revendication).subscribe(data => {
        },error => {
        
        });
          }else{
            if(this.typeChoice == 3){
              this.absenceService.addAsk(this.certificate).subscribe(data => {
              },error => {
              
              });
                }else{
                  if(this.typeChoice == 4){
    
                    this.moratoire.amount= this.askForm.get('amount').value ;
                    this.moratoire.date= this.askForm.get('date').value ;
                    this.moratoire.image= this.document;
                    this.absenceService.addAsk(this.moratoire).subscribe(data => {
                    },error => {
                    
                    });
                      }
                }
          }

    }
  
  }
  

}
