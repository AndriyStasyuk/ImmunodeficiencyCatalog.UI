import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis-pid',
  templateUrl: './diagnosis-pid.component.html',
  styleUrls: ['./diagnosis-pid.component.scss']
})
export class DiagnosisPidComponent implements OnInit {

  // Data for radio button  
  damagedGenes: string;
  damagedGeness: string[] = ['Історія генетичних досліджень невідома', 'Генетичне дослідження не проводилось','Генетичне дослідження проводилось,мутації не виявлено'];
  
  geneticResearchDate: string;
  geneticResearchDates: string[] = ['Невідомо', 'Відомо'];
  
  sequencingMethod: string;
  sequencingMethods: string[] = ['Секвенування гена', 'Екзом/геном секвенування','Невідомо'];

  geneticResearchReason: string;
  geneticResearchReasons: string[] = ['Специфічні клінічні симптоми', 'Сімейний скринінг','Пренатальна діагностика', 'Невідомо']; 
  constructor() { }

  ngOnInit() {
  }

}
