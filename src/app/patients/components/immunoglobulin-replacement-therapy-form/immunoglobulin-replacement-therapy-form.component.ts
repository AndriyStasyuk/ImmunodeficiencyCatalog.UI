import { Component, OnInit,Input } from '@angular/core';
import { ImmunoglobulinReplacementTherapyInfo } from 'src/app/models/imm-replacement-therapy-patien-info';
import { PatientService } from '../../../services/patient.service'

@Component({
  selector: 'app-immunoglobulin-replacement-therapy-form',
  templateUrl: './immunoglobulin-replacement-therapy-form.component.html',
  styleUrls: ['./immunoglobulin-replacement-therapy-form.component.scss']
})
export class ImmunoglobulinReplacementTherapyFormComponent implements OnInit {
  constructor(public patient: PatientService) { }

  RITTillToday: string;
  RITTillTodays: string[] = ['Так', 'Ні','Невідомо','Нерегулярно'];

  EndImunoglobulinInjectionDate: string = 'Невідомо';

  ProducerYesNo: string = 'Невідомо';
  
  ActualInjectionType: string;
  ActualInjectionTypes: string[] = ['Довено','Підшкірно','Домязево']

  ActualInjectionLocation: string;
  ActualInjectionLocations: string[] = ['Вдома','В лікарні','Стаціонарно','Амбулаторно','Обидві локації','Невідомо']

  Dose: string = 'Невідомо';

  InjectionInterval: string;
  InjectionIntervals: string[] = ['Кожні 7 днів','Кожні 14 днів','Кожні 21 днів','Кожні 28 днів','Невідомо']

  PatientWeight: string ='Невідомо';

  RecordedPhenomena: string;
  RecordedPhenomenas: string[] = ['Так','Ні','Невідомо']

  @Input('replecment')
  public replecment : any[];
  @Input('producers')
  public producers : string[];
  @Input('rit_info')
  public rit_info: ImmunoglobulinReplacementTherapyInfo;
  @Input('patient_registration')
  public patient_registration: any;

  create() {
    this.patient.registrate(this.patient_registration)
  }


  ngOnInit() {
    console.log("#####################################################")
    console.log(this.patient_registration)
    console.log("#####################################################")
    console.log(this.rit_info)
  }

}
