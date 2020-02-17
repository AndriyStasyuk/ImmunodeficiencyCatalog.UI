import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule} from '@angular/http';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { PatientComponentsComponent } from './components/patient-components/patient-components.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';


import { InterceptorService } from './InterceptorService'
import { PatientService } from './services/patient.service'
import { LogIn } from './services/login.service';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    PatientComponentsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    // RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule
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