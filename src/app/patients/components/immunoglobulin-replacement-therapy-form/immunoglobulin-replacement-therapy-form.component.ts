import { Component, OnInit,Input } from '@angular/core';
import { ImmunoglobulinReplacementTherapyInfo } from 'src/app/models/imm-replacement-therapy-patien-info';
import {AddNewNotesService} from '../../../services/add-new-notes.service'

@Component({
  selector: 'app-immunoglobulin-replacement-therapy-form',
  templateUrl: './immunoglobulin-replacement-therapy-form.component.html',
  styleUrls: ['./immunoglobulin-replacement-therapy-form.component.scss']
})
export class ImmunoglobulinReplacementTherapyFormComponent implements OnInit {

  RITTillToday: string;
  RITTillTodays: string[] = ['Так', 'Ні','Невідомо','Нерегулярно'];

  EndImunoglobulinInjectionDate: string = 'Невідомо';

  ProducerYesNo: string = 'Невідомо';
  
  ActualInjectionType: string;
  ActualInjectionTypes: string[] = ['Довено','Підшкірно','Домязево'];

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
  AddNewNotesService: any;

  constructor(
    private addNewNotesService: AddNewNotesService
  ) { }
  dispaly: boolean = false;


  addNewNote(){
    this.dispaly = true;
  }

  saveNewNote(){
    this.dispaly = false;
    this.rit_info.PatientId=6;
    this.addNewNotesService.postNewNotes(this.rit_info)
    .subscribe(data => {console.log(data)},
      (error) => {
       console.log(error)
      },
    );
  }
  ngOnInit() {
    console.log(this.rit_info)
  }

}
