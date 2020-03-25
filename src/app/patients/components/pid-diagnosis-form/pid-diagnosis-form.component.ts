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

  @Input('pidDiagnose')
  public pidDiagnose;
  @Input('pid_diagnosis_data')
  public pid_diagnosis_data: PidDiagnosis;

  serializedDate = new FormControl((new Date()).toISOString());
  edit = false;
  categories: Array<any>;
  message_error = "Не вдалося оновити дані!"
  

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
    this.categories = this.diagnoses.find(element => element.id == value ).diagnos
    console.log(this.categories)
  }

  activateEdit(){
    this.edit = true;
  }

  saveData(){
    const PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.patient.saveModifiedPID(PatientId,this.pidDiagnose.patient)
    .subscribe(
      () => {
        this.edit = false;
      },
      (err) => {
        console.log(err)
        this.flashMessage.error_message(this.message_error)
      },
    );
  }
 
  ngOnInit() {
    this.laboratoryService.get().subscribe( response => {this.laboratories = response.entities}, error => console.log(error) )
    this.diagnoseService.get().subscribe( response => {this.diagnoses = response.entities, console.log(this.diagnoses)}, error => console.log(error) )
  }

}
