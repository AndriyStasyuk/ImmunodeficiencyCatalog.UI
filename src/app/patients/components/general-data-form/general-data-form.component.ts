import { Component, OnInit,Input } from '@angular/core';
import { PatientGeneralData } from 'src/app/models/patient-general-data'


export interface obj {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-general-data-form',
  templateUrl: './general-data-form.component.html',
  styleUrls: ['./general-data-form.component.scss']
})
export class GeneralDataFormComponent implements OnInit {
  patient: string [];
  obj: JsonWebKey;
   
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
  @Input('cities')
  public cities: string[];
  @Input('general_data')
  public general_data: PatientGeneralData;


  constructor() { }

  ngOnInit() { }

}
