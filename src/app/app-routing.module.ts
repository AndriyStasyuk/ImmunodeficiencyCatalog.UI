import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { PatientComponentsComponent } from './components/patient-components/patient-components.component';
import { ImmunoglobulinReplacementTherapyComponent } from './components/patient-components/immunoglobulin-replacement-therapy/immunoglobulin-replacement-therapy.component';
import { StemcellsComponent } from './components/patient-components/stemcells/stemcells.component';
import { WayToDiagnoseComponent } from './components/patient-components/way-to-diagnose/way-to-diagnose.component';
import { DiagnosisPidComponent } from './components/patient-components/diagnosis-pid/diagnosis-pid.component';
import { GeneralDataComponent } from './components/patient-components/general-data/general-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  {
    path:'table', component: TableComponent
  },
  {
    path:'patientComponents', component: PatientComponentsComponent,
    children:[
      {
        path:'generalData', component: GeneralDataComponent
      },
      {
        path:'wayToDiagnose', component: WayToDiagnoseComponent
      },
      {
        path:'immunoglobulinReplacementTherapy', component: ImmunoglobulinReplacementTherapyComponent
      },
      {
        path:'stemcells', component: StemcellsComponent
      },
      {
        path:'diagnosisPid', component: DiagnosisPidComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
