import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientEditPageComponent } from './pages/patient-edit-page/patient-edit-page.component';
import { PatientViewPageComponent } from './pages/patient-view-page/patient-view-page.component';
import { PatientAddPageComponent } from './pages/patient-add-page/patient-add-page.component';
import { PatientsComponent } from './patients.component';
import { PatientListPageComponent } from './pages/patient-list-page/patient-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,     
    children: [
      {
        path: '',
        component:  PatientListPageComponent
      },
      {
        path: ':id/edit',
        component: PatientEditPageComponent,
      },
      {
        path: ':id',
        component: PatientViewPageComponent,
      },
      {
        path: 'add',
        component: PatientAddPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
