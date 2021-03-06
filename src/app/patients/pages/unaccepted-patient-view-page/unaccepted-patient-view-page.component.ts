import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../models/patients';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { ConfirmationDialogService } from '../../../confrim-dialog/confirm-dialog.service';
import { Router } from '@angular/router';
import { FlasMessages } from '../../../services/flash_messaages.service'


@Component({
  selector: 'app-unaccepted-patient-view-page',
  templateUrl: './unaccepted-patient-view-page.component.html',
  styleUrls: ['./unaccepted-patient-view-page.component.scss']
})
export class UnacceptedPatientViewPageComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private confirmationDialogService: ConfirmationDialogService,
    private flashMessage: FlasMessages,
    public router: Router,
  ){}

  data: Patient[] = []
  userRole = localStorage.getItem("userRole").split(",")
  CountryExpert = this.userRole.includes("CountryExpert");
  
  displayedColumns: string[] = ['esid', 'getAge', 'diagnosName', 'firstDiagnosisPidDate', 'endImunoglobulinInjectionDate', 
  'actualInjectionType', 'dose', 'produserName', 'review', 'writeNotes']
  
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

  public openConfirmationDialog(dpidId) {
    this.confirmationDialogService.confirm('Підтвердження пацієнта', 'Ви дійсно хочете підтвердити цього пацєнта?')
    .then(confirmed => {
      if (confirmed === true) {
        this.patientService.confirmDiagnose(dpidId).subscribe(
          () => {
            this.router.navigate(['/patients']);
          },
          () => {
            this.flashMessage.error_message("Не вдалося підтвердити діагноз пацієнта!");
          },
        )
      }
    }
    )
    .catch(() => console.log('User dismissed the dialog'));
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    let user = localStorage.getItem("accessToken");
    this.dataSource.paginator = this.paginator;
    this.patientService.getUnacceptedPatient().subscribe( response => {this.data = response.entities, console.log(this.data)}, error => console.log(error) )
    if (this.CountryExpert) {
      this.displayedColumns.unshift('select')
    }
  }

}
