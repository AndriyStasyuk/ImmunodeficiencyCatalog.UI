import { Component, OnInit,Input } from '@angular/core';

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
