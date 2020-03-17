import { Component, OnInit,Input } from '@angular/core';
import { ImmunoglobulinReplacementTherapyInfo } from 'src/app/models/imm-replacement-therapy-patien-info';
import {AddNewNotesService} from '../../../services/add-new-notes.service';
import { PatientService } from '../../../services/patient.service'
import { Router,ActivatedRoute } from '@angular/router';
import { FlasMessages } from '../../../services/flash_messaages.service'
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-immunoglobulin-replacement-therapy-form',
  templateUrl: './immunoglobulin-replacement-therapy-form.component.html',
  styleUrls: ['./immunoglobulin-replacement-therapy-form.component.scss']
})
export class ImmunoglobulinReplacementTherapyFormComponent implements OnInit {
  constructor(
    public patient: PatientService,
    public router: Router,
    private flashMessage: FlasMessages,
    private addNewNotesService: AddNewNotesService,
    private route: ActivatedRoute
  ) { }

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
  
  message_error = "Не вдалося створити нового пацієнта!"
  serializedDate = new FormControl((new Date()).toISOString());

  @Input('replecment')
  public replecment : any[];
  @Input('producers')
  public producers : string[];
  @Input('rit_info')
  public rit_info: ImmunoglobulinReplacementTherapyInfo;
  @Input('patient_registration')
  public patient_registration: any;


  dispaly: boolean = false;


  addNewNote(){
    this.dispaly = true;
  }

  saveNewNote(){
    this.dispaly = false;
    console.log(this.rit_info);
    this.rit_info.PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.addNewNotesService.postNewNotes(this.rit_info)
    .subscribe(data => {console.log(data)},
      (error) => {
       console.log(error)
      },
    );
  }
  
  ngOnInit() {
    console.log(this.rit_info);
  }

  create() {
    this.patient.registrate(this.patient_registration)
    .subscribe(
      () => {
        this.router.navigate(['/patients']);
      },
      (err) => {
        console.log(err)
        this.flashMessage.error_message(this.message_error)
      },
    );
  }


}
