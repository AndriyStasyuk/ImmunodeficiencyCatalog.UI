import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-immunoglobulin-replacement-therapy-form',
  templateUrl: './immunoglobulin-replacement-therapy-form.component.html',
  styleUrls: ['./immunoglobulin-replacement-therapy-form.component.scss']
})
export class ImmunoglobulinReplacementTherapyFormComponent implements OnInit {

  RITTillToday: string;
  RITTillTodays: string[] = ['Так', 'Ні','Невідомо','Нерегулярно'];

  EndImunoglobulinInjectionDate: string;
  EndImunoglobulinInjectionDates: string[] = ['Відомо', 'Невідомо'];

  ProducerYesNo: string;
  ProducerYesNos: string[] = ['Відомо', 'Невідомо'];
  
  ActualInjectionType: string;
  ActualInjectionTypes: string[] = ['Довено','Підшкірно','Домязево']

  ActualInjectionLocation: string;
  ActualInjectionLocations: string[] = ['Вдома','В лікарні','Стаціонарно','Амбулаторно','Обидві локації','Невідомо']

  Dose: string;
  Doses: string[] = ['Відомо','Невідомо']

  InjectionInterval: string;
  InjectionIntervals: string[] = ['Кожні 7 днів','Кожні 14 днів','Кожні 21 днів','Кожні 28 днів','Невідомо','Інше']

  PatientWeight: string;
  PatientWeights: string[] = ['Відомо','Невідомо']

  RecordedPhenomena: string;
  RecordedPhenomenas: string[] = ['Так','Ні','Невідомо']

  @Input('replecment')
  public replecment : any[];
  @Input('producers')
  public producers : string[];
  constructor() { }

  ngOnInit() {
  }

}
