import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stem-cells-transplantation-form',
  templateUrl: './stem-cells-transplantation-form.component.html',
  styleUrls: ['./stem-cells-transplantation-form.component.scss']
})
export class StemCellsTransplantationFormComponent implements OnInit {

  // Data for radio button  

  stemCellsTransplantation: string;
  stemCellsTransplantations: string[] = ['Так', 'Ні','Невідомо'];

  transplantationDate: string;
  transplantationDates: string[] = ['Відомо', 'Невідомо'];

  CB14_soure: string;
  CB14_soures: string[] = ['Кістковий мозок', 'Периферична кров','Пуповинна кров','Невідомо'];
    
  geneticTherapy: string;
  geneticTherapys: string[] = ['Так','Ні','Невідомо']



@Input('stemcells')
public stemcells : any[];
  constructor() { }

  ngOnInit() {
  }

}
