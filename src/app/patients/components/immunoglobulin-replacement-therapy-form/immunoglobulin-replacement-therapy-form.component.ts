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
import { isNull } from "util";



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
  ActualInjectionTypes: string[] = ['Внутрішньовенно','Підшкірно',"внутрішьом'язево"];
  ActualInjectionLocation: string;
  ActualInjectionLocations: string[] = ['Вдома','В лікарні','Стаціонарно','Амбулаторно','Обидві локації','Невідомо']
  Dose: string = 'Невідомо';
  userRole = localStorage.getItem("userRole").split(",")
  Doctor = this.userRole.includes("Doctor");
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

  check_message: string = "Необхідно добавити: "

  check_patient_info(data){
    let coma = ""
    let error = false
    if(!data[0].firstName || !data[0].lastName || !data[0].middleName){
      this.check_message = this.check_message.concat("ПІБ")
      coma = ", "
      error = true
    }
    if(!data[0].birthdayDate){
      this.check_message = this.check_message.concat(coma, "Дату народження")
      coma = ", "
      error = true
    }
    if(!data[0].LiveCity){
      this.check_message = this.check_message.concat(coma, "Місто народження")
      coma = ", "
      error = true
    }
    if(!data[0].CityId){
      this.check_message = this.check_message.concat(coma, "Місто проживання")
      coma = ", "
      error = true
    }
    if(!data[0].RadiosAgreement){
      this.check_message = this.check_message.concat(coma, "Інформацію про згоду пацієнта")
      coma = ", "
      error = true
    }
    if(!data[2].diagnosesModel){
      this.check_message = this.check_message.concat(coma, "Інформацію про діагноз")
      coma = ", "
      error = true
    }
    return error
  }
  
  create() {
    let incorrect_data = this.check_patient_info(this.patient_registration)
    if(incorrect_data){
        this.flashMessage.error_message(this.check_message, 5000)
        this.check_message = "Необхідно добавити: "
    }
    else{
      this.patient.registrate(this.patient_registration)
      .subscribe(
        () => {
          this.router.navigate(['/patients']);
        },
        () => {
          this.flashMessage.error_message(this.message_error)
        },
      );
    }
  }

  activateEdit(){
    this.edit = true;
    this.indexEdit = this.replecment.rITDetails.length-1; 
  }

  disactivateEdit(){
    this.edit = false;
  }

  convert(str) {
    if(str === "" || str == "Невідомо" || isNull(str)){
      return str
    }
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  saveData(){
    this.replecment.rITDetails[this.indexEdit].endImunoglobulinInjectionDate = this.convert(this.replecment.rITDetails[this.indexEdit].endImunoglobulinInjectionDate);

    const producerId = this.replecment.rITDetails[this.indexEdit].producerId;
    this.replecment.rITDetails[this.indexEdit].producerName =  this.producers.find(element => element.id === producerId).producerName;
    
    const rITDetailsId = this.replecment.rITDetails[this.indexEdit].id;
    this.replecment.rITDetails[this.indexEdit].PatientId = Number(this.route.snapshot.paramMap.get('id'));

    this.patient.saveModifiedRITDetails(rITDetailsId,this.replecment.rITDetails[this.indexEdit])
    .subscribe(
      () => {
        this.edit = false;
      },
      () => {
        this.flashMessage.error_message(this.message_error_edit)
      },
    );
  }

  ngOnInit() { 
    this.producersService.get().subscribe( response => {this.producers = response.entities, console.log(this.producers)}, error => console.log(error) )
  }

}
