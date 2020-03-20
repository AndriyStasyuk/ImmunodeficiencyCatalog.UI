import { PatientService } from './../../../services/patient.service';
import { Component, OnInit, Input } from '@angular/core';
import { StemCellsTransplantation } from 'src/app/models/stem-cells-transplantation-info';
import {AddNewNotesService} from '../../../services/add-new-notes.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-stem-cells-transplantation-form',
  templateUrl: './stem-cells-transplantation-form.component.html',
  styleUrls: ['./stem-cells-transplantation-form.component.scss']
})
export class StemCellsTransplantationFormComponent implements OnInit {


  // Data for radio button  

  stemCellsTransplantation: string;
  stemCellsTransplantations: string[] = ['Так', 'Ні','Невідомо'];
  transplantationDate: string = 'Так, Невідомо';
  CB14_soure: string;
  CB14_soures: string[] = ['Кістковий мозок', 'Периферична кров','Пуповинна кров','Невідомо'];
  geneticTherapy: string;
  geneticTherapys: string[] = ['Так','Ні','Невідомо'];
  serializedDate = new FormControl((new Date()).toISOString());

  @Input('stemcells')
  public stemcells : any[];

  @Input('stem_cells_transplantation')
  public stem_cells_transplantation: StemCellsTransplantation;

  constructor(
    public patient: PatientService,
    private addNewNotesService: AddNewNotesService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) { }

  dispaly: boolean = false;

  addNewNote(){
    this.dispaly = true;
  }

  saveNewNote(){
    this.dispaly = false;
    this.stem_cells_transplantation.PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.addNewNotesService.postNewNotesStemCells(this.stem_cells_transplantation).subscribe(() => {
      this.activatedRoute.params.pipe(switchMap(routeParams => this.patient.getPatientById(routeParams['id'])))
     .subscribe( response => console.log(this.stemcells  = response), 
      error => console.log(error));
      },
    (error) => {
     console.log(error)
    },
  );
  }

  ngOnInit() {
    console.log(this.stem_cells_transplantation);
  }

}
