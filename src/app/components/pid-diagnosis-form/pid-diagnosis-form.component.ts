import { Component, OnInit,Input } from '@angular/core';

export interface laboratoryName {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pid-diagnosis-form',
  templateUrl: './pid-diagnosis-form.component.html',
  styleUrls: ['./pid-diagnosis-form.component.scss']
})
export class PidDiagnosisFormComponent implements OnInit {
  damagedGenes: string;
  damagedGeness: string[] = ['Історія генетичних досліджень невідома', 'Генетичне дослідження не проводилось','Генетичне дослідження проводилось,мутації не виявлено', 'Генетичне дослідження проводилось,мутації виявлено'];
  
  geneticResearchDate: string;
  geneticResearchDates: string[] = ['Невідомо', 'Відомо'];
  
  sequencingMethod: string;
  sequencingMethods: string[] = ['Секвенування гена', 'Екзом/геном секвенування','Невідомо'];

  geneticResearchReason: string;
  geneticResearchReasons: string[] = ['Специфічні клінічні симптоми', 'Сімейний скринінг','Пренатальна діагностика', 'Невідомо']; 
  
  laboratoryNames: laboratoryName[] = [
    {value: 'Invitae, Сан-Франциско США-0', viewValue: 'Invitae, Сан-Франциско США'},
    {value: 'Генетична лабораторія медичного університету, Дебрецин Угорщина-1', viewValue: 'Генетична лабораторія медичного університету, Дебрецин Угорщина'},
    {value: 'Інститут спадкової паталогії АМН України-3', viewValue: 'Інститут спадкової паталогії АМН України'},
    {value: 'Інше,вказати-3', viewValue: 'Інше,вказати'},
];
  @Input('pidDiagnose')
  public pidDiagnose : any[];
  constructor() { }

  ngOnInit() {
  }

}
