import { DiagnoseService } from './../../../services/diagnose.service';
import { ProducersService } from './../../../services/producers.service';
import { Producers } from './../../../models/producers';
import { Laboratory } from './../../../models/laboratory';
import { Diagnose } from './../../../models/diagnose';
import { Component, OnInit, Input } from '@angular/core';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { PatientGeneralData } from 'src/app/models/patient-general-data'
import { PidDiagnosis } from 'src/app/models/pid-diagnosis-info'
import { PatientPathToDiagnosis } from 'src/app/models/path-to-diagrosis-info';
import { StemCellsTransplantation } from 'src/app/models/stem-cells-transplantation-info';
import { ImmunoglobulinReplacementTherapyInfo } from 'src/app/models/imm-replacement-therapy-patien-info';


@Component({
  selector: 'app-patient-add-page',
  templateUrl: './patient-add-page.component.html',
  styleUrls: ['./patient-add-page.component.scss']
})
export class PatientAddPageComponent implements OnInit {

  constructor(
    private laboratoryService: LaboratoryService ,
    private producersService: ProducersService,
    private diagnoseService: DiagnoseService
  ) { }

  
  laboratories: Laboratory[] = []
  producers: Producers[] = []
  diagnoses: Diagnose[] =[]
  general_data: PatientGeneralData = new PatientGeneralData()
  path_to_diagnoses: PatientPathToDiagnosis = new PatientPathToDiagnosis()
  pid_diagnosis_data: PidDiagnosis = new PidDiagnosis()
  stem_cells_transplantation: StemCellsTransplantation = new StemCellsTransplantation()
  rit_info: ImmunoglobulinReplacementTherapyInfo = new ImmunoglobulinReplacementTherapyInfo()

  patient_registration = [
    this.general_data,
    this.path_to_diagnoses,
    this.pid_diagnosis_data,
    this.stem_cells_transplantation,
    this.rit_info
  ]

  ngOnInit() {
    this.laboratoryService.get().subscribe( response => {this.laboratories = response.entities, console.log(this.laboratories)}, error => console.log(error) )
    this.producersService.get().subscribe( response => {this.producers = response.entities, console.log(this.producers)}, error => console.log(error) )
    this.diagnoseService.get().subscribe( response => {this.diagnoses = response.entities, console.log(this.diagnoses)}, error => console.log(error) )
  }
}
