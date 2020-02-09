import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunoglobulin-replacement-therapy',
  templateUrl: './immunoglobulin-replacement-therapy.component.html',
  styleUrls: ['./immunoglobulin-replacement-therapy.component.scss']
})
export class ImmunoglobulinReplacementTherapyComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
