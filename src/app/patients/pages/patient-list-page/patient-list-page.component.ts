import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../models/patients';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-patient-list-page',
  templateUrl: './patient-list-page.component.html',
  styleUrls: ['./patient-list-page.component.scss']
})
export class PatientListPageComponent implements OnInit {

  constructor(
    private patientService: PatientService 
  ){}

  data: Patient[] = []

  displayedColumns: string[] = ['select', 'esid', 'getAge', 'firstDiagnosisPidDate', 'endImunoglobulinInjectionDate', 
  'actualInjectionType', 'dose', 'producer', 'review']
  dataSource = new MatTableDataSource<Patient>(this.data)
  selection = new SelectionModel<Patient>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Patient): string {
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
    this.patientService.get().subscribe( response => {this.data = response.entities, console.log(this.data)}, error => console.log(error) )
  }

}




