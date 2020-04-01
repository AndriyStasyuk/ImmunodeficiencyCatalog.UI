

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';


const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full', canActivate:[AuthGuard] },
  {
    path:'login', component:  LoginComponent,
    canActivate:[AuthLoginGuard],
  },
  {
    path: 'patients', loadChildren:'./patients/patients.module#PatientsModule',
    canActivate:[AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

