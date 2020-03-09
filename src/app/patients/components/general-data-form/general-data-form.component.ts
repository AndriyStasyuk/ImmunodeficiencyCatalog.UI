import { Component, OnInit,Input } from '@angular/core';
import { PatientGeneralData } from 'src/app/models/patient-general-data'
import { DateAdapter } from '@angular/material';
import {FormControl} from '@angular/forms';


export interface obj {
  value: string;
  viewValue: string;
}

export interface esid_select{
  checked: boolean;
  familyTypeMember: string;
  esid: string;
}

@Component({
  selector: 'app-general-data-form',
  templateUrl: './general-data-form.component.html',
  styleUrls: ['./general-data-form.component.scss']
})
export class GeneralDataFormComponent implements OnInit {
  patient: string [];
  obj: JsonWebKey;
   
  sex: string;
  sexs: string[] = ['Жіноча', 'Чоловіча'];
  
  radiosAgreement: string;
  radiosAgreements: string[] = ['Цілковита', 'Згода лише на науковий аналіз','Не застосовується'];
  
  familyTiesPid: string;
  familyTiesPids: string[] = ['Так', 'Ні','Невідомо'];

  esid_select: esid_select[]=[
    {checked:false, familyTypeMember:'Батько', esid:''},
    {checked:false, familyTypeMember:'Мати', esid:''},
    {checked:false, familyTypeMember:'Сестра', esid:''},
    {checked:false, familyTypeMember:'Брат', esid:''},
    {checked:false, familyTypeMember:'Родич по жіночій лінії', esid:''},
    {checked:false, familyTypeMember:'Родич по чоловічій лінії', esid:''},
  ] 
  serializedDate = new FormControl((new Date()).toISOString());

  user = true;
  isDiasable = false;

  @Input('generalData') 
  public generalData : string[];
  @Input('cities')
  public cities: string[];
  @Input('general_data')
  public general_data: PatientGeneralData;
  familyMember:string;

  onCheckboxChange(esid,event) {
    if(event.checked == true || event.type == "change"){
      esid.checked=true;
      console.log(esid.symptomName)
      console.log(event)
      console.log(this.general_data.eSIDModels)
      if(event.type == "change"){
        console.log(event.target.value)
        console.log(this.general_data.eSIDModels.push({familyTypeMember:esid.symptomName, esid:event.target.value}))
        console.log(this.general_data.eSIDModels)
        console.log(this.general_data.eSIDModels);
      }
    }
    else {
      console.log(esid.checked=false,event)
    }  
  }
    
  addPid(){
    if(this.familyMember){
      this.esid_select.push({checked:false, familyTypeMember:this.familyMember, esid:''});
    }
    this.familyMember="";
  }

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('ukr');   
}

  ngOnInit() {
    console.log(this.general_data)
  }

}
