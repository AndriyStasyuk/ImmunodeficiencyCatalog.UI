import { switchMap } from 'rxjs/operators';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patient-components',
  templateUrl: './patient-components.component.html',
  styleUrls: ['./patient-components.component.scss'],
})
export class PatientComponentsComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute
    ) { }
     data: any[] ;
    
    ngOnInit() {
      this.activatedRoute.params.pipe(switchMap(routeParams =>this.patientService.getPatientById(routeParams['id'])))
      .subscribe( response => console.log(this.data = response), error => console.log(error));
  }

}
