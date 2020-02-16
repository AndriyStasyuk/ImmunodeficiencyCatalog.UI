import { AppMaterialModule } from './app.material.module';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule} from '@angular/http';
import 'hammerjs';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { PatientComponentsComponent } from './components/patient-components/patient-components.component';
import { GeneralDataFormComponent } from './components/general-data-form/general-data-form.component';
import { PathToDiagnosisFormComponent } from './components/path-to-diagnosis-form/path-to-diagnosis-form.component';
import { PidDiagnosisFormComponent } from './components/pid-diagnosis-form/pid-diagnosis-form.component';
import { StemCellsTransplantationFormComponent } from './components/stem-cells-transplantation-form/stem-cells-transplantation-form.component';
import { ImmunoglobulinReplacementTherapyFormComponent } from './components/immunoglobulin-replacement-therapy-form/immunoglobulin-replacement-therapy-form.component';
import { PatientAddPageComponent } from './patients/pages/patient-add-page/patient-add-page.component';
import { PatientEditPageComponent } from './patients/pages/patient-edit-page/patient-edit-page.component';
import { PatientViewPageComponent } from './patients/pages/patient-view-page/patient-view-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatCheckboxModule, MatTabsModule,MatRadioModule,MatIconModule,
  MatButtonModule,MatFormFieldModule, MatInputModule, MatRippleModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

import { InterceptorService } from './InterceptorService'
import { PatientService } from './services/patient.service'
import { LogIn } from './services/login.service'

//import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    PatientComponentsComponent,
    GeneralDataFormComponent,
    PathToDiagnosisFormComponent,
    PidDiagnosisFormComponent,
    StemCellsTransplantationFormComponent,
    ImmunoglobulinReplacementTherapyFormComponent,
    LoginComponent,
    PatientAddPageComponent,
    PatientEditPageComponent,
    PatientViewPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutes,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTabsModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    PatientService,
    LogIn,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }