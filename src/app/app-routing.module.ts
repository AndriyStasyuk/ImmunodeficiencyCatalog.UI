import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './pages/login/login.component';
import { PatientAddPageComponent } from './patients/pages/patient-add-page/patient-add-page.component';
import { PatientViewPageComponent } from './patients/pages/patient-view-page/patient-view-page.component';
import { PatientEditPageComponent } from './patients/pages/patient-edit-page/patient-edit-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  {
    path:'table', component: TableComponent
  },
  {
    path:'login', component:  LoginComponent
  },
  {
    path :'patient/add', component: PatientAddPageComponent
  },
  {
    path :`patient/:id/view`, component: PatientViewPageComponent
  },
  {
    path :'patient/:id/edit', component: PatientEditPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
