import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PatientService } from './../../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { ImmunoglobulinReplacementTherapyInfo } from './../../../models/imm-replacement-therapy-patien-info';
import { StemCellsTransplantation } from 'src/app/models/stem-cells-transplantation-info';


@Component({
  selector: 'app-patient-view-page',
  templateUrl: './patient-view-page.component.html',
  styleUrls: ['./patient-view-page.component.scss']
})
export class PatientViewPageComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute
    ) { }
     data: any[] ;

  rit_info: ImmunoglobulinReplacementTherapyInfo = new ImmunoglobulinReplacementTherapyInfo()
  stem_cells_transplantation: StemCellsTransplantation = new StemCellsTransplantation()
  ngOnInit() {
    this.activatedRoute.params.pipe(switchMap(routeParams =>this.patientService.getPatientById(routeParams['id'])))
    .subscribe( response => console.log(this.data = response), error => console.log(error));
  }

}
