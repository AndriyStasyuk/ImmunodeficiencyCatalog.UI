import { ProducersService } from './../../../services/producers.service';
import { Producers } from './../../../models/producers';
import { Laboratory } from './../../../models/laboratory';
import { Component, OnInit, Input } from '@angular/core';
import { LaboratoryService } from 'src/app/services/laboratory.service';


@Component({
  selector: 'app-patient-add-page',
  templateUrl: './patient-add-page.component.html',
  styleUrls: ['./patient-add-page.component.scss']
})
export class PatientAddPageComponent implements OnInit {

  constructor(
    private laboratoryService: LaboratoryService ,
    private producersService: ProducersService
  ) { }

  
  laboratories: Laboratory[] = []
  producers: Producers[] = []

  ngOnInit() {
    this.laboratoryService.get().subscribe( response => {this.laboratories = response.entities, console.log(this.laboratories)}, error => console.log(error) )
    this.producersService.get().subscribe( response => {this.producers = response.entities, console.log(this.producers)}, error => console.log(error) )
  }

}
