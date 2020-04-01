import { Component, OnInit,Input } from '@angular/core';
import { PidDiagnosis } from 'src/app/models/pid-diagnosis-info'
import {FormControl} from '@angular/forms';
import { Laboratory } from './../../../models/laboratory';
import { Diagnose } from './../../../models/diagnose';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { DiagnoseService } from './../../../services/diagnose.service';
import { FlasMessages } from '../../../services/flash_messaages.service';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../services/patient.service';
import { isNull } from "util";

@Component({
  selector: 'app-pid-diagnosis-form',
  templateUrl: './pid-diagnosis-form.component.html',
  styleUrls: ['./pid-diagnosis-form.component.scss']
})
export class PidDiagnosisFormComponent implements OnInit {
  constructor(
    private laboratoryService: LaboratoryService ,
    private diagnoseService: DiagnoseService,
    public patient: PatientService,
    private flashMessage: FlasMessages,
    private route: ActivatedRoute, 
  ) { }

  laboratories: Laboratory[] = []
  diagnoses: Diagnose[] =[]
  indexEdit: number;

  @Input('pidDiagnose')
  public pidDiagnose;
  @Input('pid_diagnosis_data')
  public pid_diagnosis_data: PidDiagnosis;

  serializedDate = new FormControl((new Date()).toISOString());
  edit = false;
  categories: Array<any>;
  message_error = "Не вдалося оновити дані!";

  userRole = localStorage.getItem("userRole").split(",")
  Doctor = this.userRole.includes("Doctor");
  
  damagedGenes: string;
  damagedGeness: string[] = ['Історія генетичних досліджень невідома', 'Генетичне дослідження не проводилось','Генетичне дослідження проводилось,мутації не виявлено', 'Генетичне дослідження проводилось,мутації виявлено'];
  
  geneticResearchDate: string;
  geneticResearchDates: string[] = ['Невідомо'];
  geneticResearchDateYes = '';
  
  sequencingMethod: string;
  sequencingMethods: string[] = ['Секвенування гена', 'Екзом/геном секвенування','Невідомо'];

  geneticResearchReason: string;
  geneticResearchReasons: string[] = ['Специфічні клінічні симптоми', 'Сімейний скринінг','Пренатальна діагностика', 'Невідомо']; 
  
  selectCategories(value){
    if(this.edit === true){
      this.categories = this.diagnoses.find(element => element.name === value).diagnos;
      return this.categories;
    }
    this.categories = this.diagnoses.find(element => element.id == value).diagnos;
    console.log(this.categories);
  }

  disactivateEdit(){
    this.edit = false;
  } 

  activateEdit(){
    this.edit = true;
    this.indexEdit = this.pidDiagnose.pidDiagnosis.length-1;    
    this.categories = this.diagnoses.find(element => element.name === this.pidDiagnose.pidDiagnosis[this.indexEdit].categoryName).diagnos;
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
  this.pidDiagnose.pidDiagnosis[this.indexEdit].geneticResearchDate = this.convert(this.pidDiagnose.pidDiagnosis[this.indexEdit].geneticResearchDate)
   const diagnose = this.diagnoses.find(element => element.name === this.pidDiagnose.pidDiagnosis[this.indexEdit].categoryName).diagnos;
   this.pidDiagnose.pidDiagnosis[this.indexEdit].diagnosId = diagnose.find(element => element.name === this.pidDiagnose.pidDiagnosis[this.indexEdit].diagnosName).id;
   const pidDiagnosisId = this.pidDiagnose.pidDiagnosis[this.indexEdit].id;
    this.pidDiagnose.pidDiagnosis[this.indexEdit].PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.patient.saveModifiedPID(pidDiagnosisId,this.pidDiagnose.pidDiagnosis[this.indexEdit])
    .subscribe(
      () => {
        this.edit = false;
      },
      (err) => {

        this.flashMessage.error_message(this.message_error)
      },
    );
  } 
 
  ngOnInit() {
    this.laboratoryService.get().subscribe( response => {this.laboratories = response.entities}, error => console.log(error) )
    this.diagnoseService.get().subscribe( response => {this.diagnoses = response.entities}, error => console.log(error) )
  }

}
