import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';


import { InterceptorService } from './InterceptorService'
import { PatientService } from './services/patient.service'
import { LogIn } from './services/login.service';
import { FlasMessages } from './services/flash_messaages.service'
import { SharedModule } from './shared.module';
import { ConfrimDialogComponent } from './confrim-dialog/confrim-dialog.component';
import { ConfirmationDialogService } from './confrim-dialog/confirm-dialog.service';
import { AuthLoginGuard } from './guards/auth-login.guard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ConfrimDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    // RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    HttpClientModule,
    PatientService,
    LogIn,
    FlasMessages,
    ConfirmationDialogService,
    AuthGuard,
    AuthLoginGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  entryComponents: [
    ConfrimDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }