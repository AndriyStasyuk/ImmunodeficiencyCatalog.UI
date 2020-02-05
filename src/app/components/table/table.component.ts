import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';


export interface PeriodicElement {
  id: string;
  age: number;
  date_of_diagnosis: string;
  ld_immunoglobulin: string;
  actual_route: string;
  dose: number;
  producer: string;
  review: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'ВОВ19000101', age: 26, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
  {id: 'ВОВ19000101', age: 25, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
  {id: 'ВОВ19000101', age: 29, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
  {id: 'ВОВ19000101', age: 15, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
  {id: 'ВОВ19000101', age: 35, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
  {id: 'ВОВ19000101', age: 25, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
  {id: 'ВОВ19000101', age: 25, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
  {id: 'ВОВ19000101', age: 25, date_of_diagnosis: "1900-01-01", ld_immunoglobulin: '1900-01-01', 
  actual_route: 'Підшкірно', dose: 23.32, producer: 'Spart', review: 'label'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'age', 'date_of_diagnosis', 'ld_immunoglobulin', 
  'actual_route', 'dose', 'producer', 'review']
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}