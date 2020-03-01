import { Component, OnInit,Input } from '@angular/core';
import { PidDiagnosis } from 'src/app/models/pid-diagnosis-info'



// export interface laboratoryName {
//   id: number;
//   viewValue: string;
// }

@Component({
  selector: 'app-pid-diagnosis-form',
  templateUrl: './pid-diagnosis-form.component.html',
  styleUrls: ['./pid-diagnosis-form.component.scss']
})
export class PidDiagnosisFormComponent implements OnInit {
  damagedGenes: string;
  damagedGeness: string[] = ['Історія генетичних досліджень невідома', 'Генетичне дослідження не проводилось','Генетичне дослідження проводилось,мутації не виявлено', 'Генетичне дослідження проводилось,мутації виявлено'];
  
  geneticResearchDate: string;
  geneticResearchDates: string[] = ['Невідомо'];
  geneticResearchDateYes = '';
  
  sequencingMethod: string;
  sequencingMethods: string[] = ['Секвенування гена', 'Екзом/геном секвенування','Невідомо'];

  geneticResearchReason: string;
  geneticResearchReasons: string[] = ['Специфічні клінічні симптоми', 'Сімейний скринінг','Пренатальна діагностика', 'Невідомо']; 
  
  @Input('pidDiagnose')
  public pidDiagnose : any[];
  @Input('laboratories')
  public laboratories : string[];
  @Input('pid_diagnosis_data')
  public pid_diagnosis_data: PidDiagnosis;
  
  
  constructor() { }

  ngOnInit() { }

}
