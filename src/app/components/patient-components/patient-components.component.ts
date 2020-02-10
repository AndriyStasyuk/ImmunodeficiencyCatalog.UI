import { DoctorService } from './../../services/doctor.service';
import { Doctor}  from './../../models/doctor';

import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-patient-components',
  templateUrl: './patient-components.component.html',
  styleUrls: ['./patient-components.component.scss'],
})
export class PatientComponentsComponent implements OnInit {

  constructor(
    private doctorService: DoctorService
    ) { }
     data: Doctor[] = [];
     patientId = 16;
  
    ngOnInit() {
    // this.doctorService.getPatientById(this.patientId).subscribe( response => {console.log(this.data = response)
    //   return Object.assign([], this.data)
    // },
    //    error => console.log(error))
  }

}
