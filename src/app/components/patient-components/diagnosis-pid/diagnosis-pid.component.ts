import { Component, OnInit } from '@angular/core';

export interface laboratoryName {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-diagnosis-pid',
  templateUrl: './diagnosis-pid.component.html',
  styleUrls: ['./diagnosis-pid.component.scss']
})
export class DiagnosisPidComponent implements OnInit {

  // Data for radio button  
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
  constructor() { }

  ngOnInit() {
  }

}
