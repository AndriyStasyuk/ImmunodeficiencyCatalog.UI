import { Component, OnInit } from '@angular/core';

export interface pid_select {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-way-to-diagnose',
  templateUrl: './way-to-diagnose.component.html',
  styleUrls: ['./way-to-diagnose.component.scss']
})
export class WayToDiagnoseComponent implements OnInit {
  
  // Data for radio button  
  firstDiagnosisPidDate: string;
  firstDiagnosisPidDates: string[] = ['Відомо', 'Невідомо'];

  pidLabOnly: string;
  pidLabOnlys: string[] = ['Так', 'Ні','Невідомо'];


  pid_selects: pid_select[] = [
    {value: 'лімфопенія-0', viewValue: 'Лімфопенія'},
    {value: 'нейтропенія-1', viewValue: 'Нейтропенія'},
    {value: 'тромбоцитопенія-2', viewValue: 'Тромбоцитопенія'},
    {value: 'анемія-3', viewValue: 'Анемія'},
    {value: 'монцитопенія-4', viewValue: 'Монцитопенія'},
    {value: 'підвищенийРівеньIgE-5', viewValue: 'Підвищений рівень IgE'},
    {value: 'гіпогамаглобулінемія-6', viewValue: 'Гіпогамаглобулінемія'},
    {value: 'інше-7', viewValue: 'Інше'}
  ];


  familyTiesPid: string;
  familyTiesPids: string[] = ['Так', 'Ні','Невідомо'];


  constructor() { }

  ngOnInit() {
  }

}
