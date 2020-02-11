import { Component, OnInit, Output, Input } from '@angular/core';


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


  user = true;
  isDiasable = false;

  @Input('generalData') 
  public generalData : string[];
  patientId = 16;

  constructor() { }
  ngOnInit() {
  }
}

