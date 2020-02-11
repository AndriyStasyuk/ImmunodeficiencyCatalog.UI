import { switchMap } from 'rxjs/operators';
import { DoctorService } from './../../services/doctor.service';
import { Doctor}  from './../../models/doctor';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-patient-components',
  templateUrl: './patient-components.component.html',
  styleUrls: ['./patient-components.component.scss'],
})
export class PatientComponentsComponent implements OnInit {

  constructor(
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute
    ) { }
     data: any[] ;
    //  patientId = 16;
    
    ngOnInit() {
      this.activatedRoute.params.pipe(switchMap(routeParams =>this.doctorService.getPatientById(routeParams['id'])))
      .subscribe( response => console.log(this.data = response), error => console.log(error));
  }

}
