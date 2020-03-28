import { PatientService } from './../../../services/patient.service';
import { Component, OnInit, Input } from '@angular/core';
import { StemCellsTransplantation } from 'src/app/models/stem-cells-transplantation-info';
import {AddNewNotesService} from '../../../services/add-new-notes.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { FlasMessages } from '../../../services/flash_messaages.service';

@Component({
  selector: 'app-stem-cells-transplantation-form',
  templateUrl: './stem-cells-transplantation-form.component.html',
  styleUrls: ['./stem-cells-transplantation-form.component.scss']
})
export class StemCellsTransplantationFormComponent implements OnInit {
 
  constructor(
    public patient: PatientService,
    private addNewNotesService: AddNewNotesService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlasMessages,
  ) { }

  @Input('stemcells')
  public stemcells; 
  @Input('stem_cells_transplantation')
  public stem_cells_transplantation: StemCellsTransplantation;

  dispaly: boolean = false;
  edit = false;
  message_error = "Не вдалося оновити дані!";
  indexEdit: number;

  stemCellsTransplantation: string;
  stemCellsTransplantations: string[] = ['Так', 'Ні','Невідомо'];
  transplantationDate: string = 'Так, Невідомо';
  CB14_soure: string;
  CB14_soures: string[] = ['Кістковий мозок', 'Периферична кров','Пуповинна кров','Невідомо'];
  geneticTherapy: string;
  geneticTherapys: string[] = ['Так','Ні','Невідомо'];
  serializedDate = new FormControl((new Date()).toISOString());

  addNewNote(){
    this.dispaly = true;
  }
  saveNewNote(){
    this.dispaly = false;
    this.stem_cells_transplantation.PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.stem_cells_transplantation.StemCellsTransplantation = "Так";
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

  activateEdit(){
    this.edit = true;
    this.indexEdit = this.stemcells.sCGTDetails.length-1;    
  }

  disactivateEdit(){
    this.edit = false;
  }

  saveData(){
    const sCGTDetailsId = this.stemcells.sCGTDetails[this.indexEdit].id;
    this.stemcells.sCGTDetails[this.indexEdit].PatientId = Number(this.route.snapshot.paramMap.get('id'))
    this.patient.saveModifiedsCGTDetails(sCGTDetailsId,this.stemcells.sCGTDetails[this.indexEdit])
    .subscribe(
      () => {
        this.edit = false;
      },
      (err) => {
        console.log(err)
        this.flashMessage.error_message(this.message_error)
      },
    );
  }

  ngOnInit() {
    
  }

}
