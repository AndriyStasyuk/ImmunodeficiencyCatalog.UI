import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stemcells',
  templateUrl: './stemcells.component.html',
  styleUrls: ['./stemcells.component.scss']
})
export class StemcellsComponent implements OnInit {
// Data for radio button  

stemCellsTransplantation: string;
stemCellsTransplantations: string[] = ['Так', 'Ні','Невідомо'];

transplantationDate: string;
transplantationDates: string[] = ['Відомо', 'Невідомо'];

CB14_soure: string;
CB14_soures: string[] = ['Кістковий мозок', 'Периферична кров','Пуповинна кров','Невідомо'];
  
geneticTherapy: string;
geneticTherapys: string[] = ['Так','Ні','Невідомо']

constructor() { }

@Input('stemcells')
public stemcells : any[];
  ngOnInit() {
  }

}
