import { Component, OnInit,Input } from '@angular/core';
import { PatientGeneralData } from 'src/app/models/patient-general-data'
import { DateAdapter } from '@angular/material';
import {FormControl} from '@angular/forms';
import { Cities } from 'src/app/models/cities';
import { CitiesService } from './../../../services/cities.service';
import { PatientService } from '../../../services/patient.service';
import { FlasMessages } from '../../../services/flash_messaages.service';
import { ActivatedRoute } from '@angular/router';


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
  constructor(
    private dateAdapter: DateAdapter<Date>,
    private citiesService: CitiesService,
    public patient: PatientService,
    private flashMessage: FlasMessages,
    private route: ActivatedRoute,
    ) {
    this.dateAdapter.setLocale('ukr');   
  }

  message_error = "Не вдалося оновити дані!"
  // patient: string [];
  obj: JsonWebKey;
   
  sex: string;
  sexs: string[] = ['Жіноча', 'Чоловіча'];
  
  radiosAgreement: string;
  radiosAgreements: string[] = ['Цілковита', 'Згода лише на науковий аналіз','Не застосовується'];
  
  alive: string;
  alive_choice: string[] = ['Так', 'Ні'];

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
  edit = false;

  cities: Cities[] = []
  

  @Input('generalData') 
  public generalData;
  @Input('general_data')
  public general_data: PatientGeneralData;
  familyMember:string;

  onCheckboxChange(esid,event) {
    if(event.checked == true || event.type == "change"){
      esid.checked=true;
      console.log(this.general_data.eSIDModels)
      if(event.type == "change"){
        console.log(event.target.value)
        console.log(this.general_data.eSIDModels.push({familyTypeMember:esid.familyTypeMember, esid:event.target.value}))
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

  saveData(){
    console.log(this.generalData.patient)
    const PatientId = Number(this.route.snapshot.paramMap.get('id'));
    this.patient.saveModifiedGeneralData(PatientId,this.generalData.patient)
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

  activateEdit(){
    this.edit = true;
  }

  ngOnInit() {
    this.citiesService.get().subscribe( response => {this.cities = response.entities, console.log(this.cities)}, error => console.log(error) )
    console.log(this.general_data)
  }

}
