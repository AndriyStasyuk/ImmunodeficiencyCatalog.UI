import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';



export interface obj {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent implements OnInit {
  

  // userData: any;
  patient: string [];
  obj: JsonWebKey;
// Data for radio button  
  sex: string;
  sexs: string[] = ['Жіноча', 'Чоловіча'];
  
  radiosAgreement: string;
  radiosAgreements: string[] = ['Цілковита', 'Згода лише на науковий аналіз','Не застосовується'];
  
  familyTiesPid: string;
  familyTiesPids: string[] = ['Так', 'Ні','Невідомо'];

  // name : string;
  name :"Solo";
  user = true;
  isDiasable = false;

  // objs: string[] =[ {firstName : "FirstName"},
  // { middleName : "MiddleName"},
  // { lastName: "LastName"},
  // { RadiosAgreement: "RadiosAgreement"},
  // { birthdayDate : "2019-09-06T17:14:16Z"},
  // { alive: "yes"},
  // {LiveRegion: 1},
  // {RegionId: 1},
  // {sex: "men"},
  // {familyTiesPid: "SomeThing"}]

//  objs: obj string[] =[ 
//    {value: 'firstName', viewValue: 'FirstName'},
//     {value: 'lastName', viewValue: 'LastName'},
//     {value: 'Інститут спадкової паталогії АМН України-3', viewValue: 'Інститут спадкової паталогії АМН України'},
//     {value: 'Інше,вказати-3', viewValue: 'Інше,вказати'}]


  constructor() { }


  ngOnInit() {}
  
  

 


  
  //  obj = {
  //     "firstName": "FirstName",
  //     "middleName": "MiddleName",
  //     "lastName": "LastName",
  //     "RadiosAgreement": "RadiosAgreement",
  //     "birthdayDate": "2019-09-06T17:14:16Z",
  //     "alive": "yes",
  //     "LiveRegion": 1,
  //     "RegionId": 1,
  //     "sex": "men",
  //     "familyTiesPid": "SomeThing",
      
  //     "firstDiagnosisPidDate": "2019-09-06T17:15:27Z",
  //     "pidLabOnly": "SomeThing",
  //     "igg": 1,
  //     "iga": 1,
  //     "igm": 1,
  //     "ige": 1,
      
  //     "DamagedGenes": "Some",
  //     "GenesInfo": "Some",
  //     "GeneticResearchDate": "2019-09-06T17:15:27Z",
  //     "SequencingMethod": "Some",
  //     "LaboratoryId": "",
  //     "LaboratoryName": "Lab",
  //     "GeneticResearchReason": "Some",
  //     "MutationsNo": "ff",
  //     "MutationsYes": "gg",
      
  //     "RITTillToday": "Some",
  //     "FirstImunoglobulinInjectionDate": "2019-09-06T17:15:27Z",
  //     "EndImunoglobulinInjectionDate": "2019-09-06T17:15:27Z",
  //     "ProducerId": "",
  //     "ProducerName": "aaa",
  //     "ActualInjectionType": "Some",
  //     "ActualInjectionLocation": "Some",
  //     "Dose": "Some",
  //     "InjectionInterval": "Some",
  //     "PatientWeight": "Some",
  //     "RecordedPhenomena": "Some",
  //     "igg_rit": 1,
    
        
  //     "StemCellsTransplantation": "Some",
  //     "TransplantationDate": "2019-09-06T17:15:27Z",
  //     "СВ34Source": "Some",
  //     "GeneticTherapy": "Some",
  //     "SeneticTherapyDate": "2019-09-06T17:15:27Z",
        
  //   "eSIDModels":[
  //   {
  //       "familyTypeMember": "Mam1",
  //       "esid": "SomeText"
  //   },
  //   {
  //       "familyTypeMember": "Mam2",
  //       "esid": "SomeText"
  //   }
  //   ],
    
    
  //   "firstPidSymptomModels":[
  //   {
  //       "SymptomName": "Name",
  //       "Date": "2019-09-06T17:15:27Z"
  //   },
  //   {
  //       "SymptomName": "Name",
  //       "Date": "2019-09-06T17:15:27Z"
  //   }
  //   ],
    
  //   "symptomModels":[
  //   {
  //       "SymptomName": "l",
  //       "DateStart": "2019-09-06T17:15:27Z"
  //   },
  //   {
  //       "SymptomName": "l",
  //       "DateStart": "2019-09-06T17:15:27Z"
  //   }
  //   ]  
    
  //   }
    // this.patient = obj as string [];
  }
  

 
  //  this.userData = objects;
  


