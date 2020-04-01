import { Diagnose } from './../../../models/diagnose';
import { Component, OnInit,Input } from '@angular/core';
import { PatientPathToDiagnosis } from 'src/app/models/path-to-diagrosis-info';
import {FormControl} from '@angular/forms';
import { PatientService } from '../../../services/patient.service';
import { FlasMessages } from '../../../services/flash_messaages.service';
import { ActivatedRoute } from '@angular/router';
import { isNull } from "util";

export interface symtoms_select{
  checked: boolean;
  symptomName: string;
  date: string;
}

@Component({
  selector: 'app-path-to-diagnosis-form',
  templateUrl: './path-to-diagnosis-form.component.html',
  styleUrls: ['./path-to-diagnosis-form.component.scss']
})
export class PathToDiagnosisFormComponent implements OnInit {

  constructor(
    public patient: PatientService,
    private flashMessage: FlasMessages,
    private route: ActivatedRoute,
  ) { }
   // Data for radio button  
   firstDiagnosisPidDate: string;
   firstDiagnosisPidDates: string[] = ['Відомо', 'Невідомо'];
 
   pidLabOnly: string;
   pidLabOnlys: string[] = ['Так', 'Ні','Невідомо'];

   pid_select: string;
   pid_selects: string[] = ['Лімфопенія','Нейтропенія','Тромбоцитопенія','Анемія','Монцитопенія','ПідвищенийРівеньIgE','Гіпогамаглобулінемія'];
 
   familyTiesPid: string;
   familyTiesPids: string[] = ['Так', 'Ні','Невідомо'];
   serializedDate = new FormControl((new Date()).toISOString());
 
   symtoms_select: symtoms_select[]=[
    {checked:false, symptomName:'Інфекції', date:''},
    {checked:false, symptomName:'Дисрегуляція імунної відповіді', date:''},
    {checked:false, symptomName:'Малігнізація (онконастороженість)', date:''},
    {checked:false, symptomName:'Синдромальні маніфестації', date:''},
  ] 
  userRole = localStorage.getItem("userRole").split(",")
  Doctor = this.userRole.includes("Doctor");
  message_error = "Не вдалося оновити дані!"
   @Input('wayToDiagnose')
   public wayToDiagnose;
   @Input('path_to_diagnoses')
   public path_to_diagnoses: PatientPathToDiagnosis;

   @Input ('diagnoses')
   public diagnoses: any[];

   symtom: string;

   categories: Array<any>;
   edit = false;


 onCheckboxChange(symtoms,event) {
  if(event.checked == true || event.type == "change"){
    symtoms.checked=true;
    console.log(symtoms.symptomName)
    console.log(event)
    console.log(this.path_to_diagnoses.firstPidSymptomModels)
    if(event.type == "change"){
      console.log(event.target.value)
      console.log(this.path_to_diagnoses.firstPidSymptomModels.push({symptomName:symtoms.symptomName, date:event.target.value}))
      console.log(this.path_to_diagnoses.firstPidSymptomModels)
      console.log(this.path_to_diagnoses.firstPidSymptomModels);
    }
  }
  else {
    console.log(symtoms.checked=false,event)
  }  
}
  
addSymtom(){
  if(this.symtom){
    this.symtoms_select.push({checked:false, symptomName:this.symtom, date:''})
  }
  this.symtom="";
}

addPid(value,event){
this.path_to_diagnoses.pidLabOnly = value;
}

selectCategories(value){
this.categories = this.diagnoses.find(element => element.id == value).diagnos
console.log(this.categories)
}

activateEdit(){
  this.edit = true;
}

disactivateEdit(){
  this.edit = false;
} 
 
convert(str) {
  if(str === "" || str == "Невідомо" || isNull(str)){
    return str
  }
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

saveData(){
    this.wayToDiagnose.firstDiagnosisPidDate = this.convert(this.wayToDiagnose.firstDiagnosisPidDate);
    const id = this.wayToDiagnose.pathToDiagnosis.id;
    this.wayToDiagnose.pathToDiagnosis.PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.patient.saveModifiedPathToDiagnos(id,this.wayToDiagnose.pathToDiagnosis,this.wayToDiagnose.firstPidSymptomModels)
    .subscribe(
      () => {
        this.edit = false;
      },
      (err) => {
        this.flashMessage.error_message(this.message_error)
      },
    );
}

findKey(id){
  return this.wayToDiagnose.firstPidSymptomModels.find(element => element.id == Number(id));
}

editSymptomName(input){
  let objectSymtom = this.findKey(input.name);
  objectSymtom.symptomName = input.value;
  console.log(this.wayToDiagnose.firstPidSymptomModels);
}

editDate(input){
  let objectSymtom = this.findKey(input.name);
  objectSymtom.date = input.value;
  console.log(this.wayToDiagnose.firstPidSymptomModels)
}

  ngOnInit() {
    console.log(this.path_to_diagnoses)
  }

}
