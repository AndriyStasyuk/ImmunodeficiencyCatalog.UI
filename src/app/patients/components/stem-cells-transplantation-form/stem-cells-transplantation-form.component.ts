import { Component, OnInit, Input } from '@angular/core';
import { StemCellsTransplantation } from 'src/app/models/stem-cells-transplantation-info';
import {AddNewNotesService} from '../../../services/add-new-notes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stem-cells-transplantation-form',
  templateUrl: './stem-cells-transplantation-form.component.html',
  styleUrls: ['./stem-cells-transplantation-form.component.scss']
})
export class StemCellsTransplantationFormComponent implements OnInit {

  // Data for radio button  
  stemCellsTransplantation: string;
  stemCellsTransplantations: string[] = ['Так', 'Ні','Невідомо'];
  transplantationDate: string = 'Невідомо';
  CB14_soure: string;
  CB14_soures: string[] = ['Кістковий мозок', 'Периферична кров','Пуповинна кров','Невідомо'];
  geneticTherapy: string;
  geneticTherapys: string[] = ['Так','Ні','Невідомо']

  @Input('stemcells')
  public stemcells : any[];

  @Input('stem_cells_transplantation')
  public stem_cells_transplantation: StemCellsTransplantation;

  constructor(
    private addNewNotesService: AddNewNotesService,
    private route: ActivatedRoute
  ) { }

  dispaly: boolean = false;

  addNewNote(){
    this.dispaly = true;
  }

  saveNewNote(){
    this.dispaly = false;
    // this.stem_cells_transplantation.PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.addNewNotesService.postNewNotes(this.stem_cells_transplantation)
    .subscribe(data => {console.log(data)},
      (error) => {
       console.log(error)
      },
    );
  }
  ngOnInit() {}

}
