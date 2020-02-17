import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientEditPageComponent } from './pages/patient-edit-page/patient-edit-page.component';
import { PatientViewPageComponent } from './pages/patient-view-page/patient-view-page.component';
import { PatientAddPageComponent } from './pages/patient-add-page/patient-add-page.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { AppMaterialModule } from '../app.material.module';
import { GeneralDataFormComponent } from './components/general-data-form/general-data-form.component';
import { PathToDiagnosisFormComponent } from '../patients/components/path-to-diagnosis-form/path-to-diagnosis-form.component';
import { PidDiagnosisFormComponent } from '../patients/components/pid-diagnosis-form/pid-diagnosis-form.component';
import { StemCellsTransplantationFormComponent } from '../patients/components/stem-cells-transplantation-form/stem-cells-transplantation-form.component';
import { ImmunoglobulinReplacementTherapyFormComponent } from './components/immunoglobulin-replacement-therapy-form/immunoglobulin-replacement-therapy-form.component';
import { SharedModule } from '../shared.module';
import { PatientListPageComponent } from './pages/patient-list-page/patient-list-page.component';
import { PatientsComponent } from './patients.component';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    PatientAddPageComponent,
    PatientEditPageComponent,
    PatientViewPageComponent,
    PatientsComponent,
    GeneralDataFormComponent,
    PathToDiagnosisFormComponent,
    PidDiagnosisFormComponent,
    StemCellsTransplantationFormComponent,
    ImmunoglobulinReplacementTherapyFormComponent,
    PatientListPageComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    PatientsRoutingModule,
    SharedModule
    // HttpClient  
  ],
  exports:[
    PatientAddPageComponent,
    PatientEditPageComponent,
    PatientViewPageComponent,
    PatientsComponent,
    GeneralDataFormComponent,
    PathToDiagnosisFormComponent,
    PidDiagnosisFormComponent,
    StemCellsTransplantationFormComponent,
    ImmunoglobulinReplacementTherapyFormComponent,
  ]
})
export class PatientsModule { }
