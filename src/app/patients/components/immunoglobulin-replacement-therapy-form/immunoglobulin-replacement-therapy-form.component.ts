import { Component, OnInit,Input } from '@angular/core';
import { ImmunoglobulinReplacementTherapyInfo } from 'src/app/models/imm-replacement-therapy-patien-info';
import {AddNewNotesService} from '../../../services/add-new-notes.service';
import { PatientService } from '../../../services/patient.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FlasMessages } from '../../../services/flash_messaages.service';
import {FormControl} from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { ProducersService } from './../../../services/producers.service';
import { Producers } from './../../../models/producers';



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
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private producersService: ProducersService,
  ) { }

  producers: Producers[] = []

  @Input('replecment')
  public replecment 
  @Input('rit_info')
  public rit_info: ImmunoglobulinReplacementTherapyInfo;
  @Input('patient_registration')
  public patient_registration: any;

  edit = false;
  indexEdit: number;
  dispaly: boolean = false;
  message_error = "Не вдалося створити нового пацієнта!";
  message_error_edit = "Не вдалось оновити дані!";
  serializedDate = new FormControl((new Date()).toISOString());


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
  phenomen: string;
  phenomens: string[] = ['Лімфопенія','Нейтропенія','Тромбоцитопенія','Анемія','Монцитопенія','ПідвищенийРівеньIgE','Гіпогамаглобулінемія'];

  addNewNote(){
    this.dispaly = true;
  }

  saveNewNote(){
    this.dispaly = false;
    this.rit_info.PatientId = Number(this.route.snapshot.paramMap.get('id'));
   
    this.addNewNotesService.postNewNotes(this.rit_info).subscribe(() => {
        this.activatedRoute.params.pipe(switchMap(routeParams => this.patient.getPatientById(routeParams['id'])))
       .subscribe( response => console.log(this.replecment  = response), 
        error => console.log(error));
        },
    (error) => {
       console.log(error)
      },
    );
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

  activateEdit(){
    this.edit = true;
    this.indexEdit = this.replecment.rITDetails.length-1; 
  }

  disactivateEdit(){
    this.edit = false;
  }

  saveData(){
    const rITDetailsId = this.replecment.rITDetails[this.indexEdit].id;
    this.replecment.rITDetails[this.indexEdit].PatientId = Number(this.route.snapshot.paramMap.get('id'))
    this.patient.saveModifiedRITDetails(rITDetailsId,this.replecment.rITDetails[this.indexEdit])
    .subscribe(
      () => {
        this.edit = false;
      },
      (err) => {
        console.log(err)
        this.flashMessage.error_message(this.message_error_edit)
      },
    );
  }

  ngOnInit() { 
    this.producersService.get().subscribe( response => {this.producers = response.entities, console.log(this.producers)}, error => console.log(error) )
  }

}
