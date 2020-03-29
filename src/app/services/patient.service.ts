import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { serverURL } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNull } from "util";

/**
 * DcotorService
 */

@Injectable()
export class PatientService {
    payload: any;

    constructor(private httpClient: HttpClient) { }

    public getАcceptedPatient(): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/Patients/accepted`);
    }
    public getUnacceptedPatient(): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/Patients/unaccepted`);
    }

    public getPatientById(patientId: number): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/PatientRegistration/${patientId}`);
    }

    public registrate(data: any): Observable<any>{
        function convert(str) {
            if(str === "" || str == "Невідомо" || isNull(str)){
              return str
            }
            var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        }
        if(data[4].InjectionIntervalOther != null){
            data[4].InjectionInterval = data[4].InjectionIntervalOther
        }

        this.payload = {
            "firstName": data[0].firstName,
            "middleName": data[0].middleName,
            "lastName": data[0].lastName,
            "RadiosAgreement": data[0].RadiosAgreement,
            "birthdayDate": convert(data[0].birthdayDate),
            "alive": data[0].alive,
            "LiveCity": data[0].LiveCity,
            "CityId": data[0].CityId,
            "sex": data[0].sex,
            "familyTiesPid": data[0].familyTiesPid,

            "firstDiagnosisPidDate": convert(data[1].firstDiagnosisPidDate),
            "pidLabOnly": data[1].pidLabOnly, 
            "pidLabOnlyYes": data[1].pidLabOnlyYes, // fixed it
            "igg": data[1].igg,
            "iga": data[1].iga,
            "igm": data[1].igm,
            "ige": data[1].ige,

            "DamagedGenes": data[2].DamagedGenes,
            "GenesInfo": data[2].GenesInfo,
            "GeneticResearchDate": convert(data[2].GeneticResearchDate),
            "SequencingMethod": data[2].SequenticMethod,            
            "LaboratoryId": data[2].LaboratoryId,
            "LaboratoryName": data[2].LaboratoryName,
            "GeneticResearchReason": data[2].GeneticResearchReason,
            "DiagnosesModel":{"DiagnosId": data[2].diagnosesModel},

            "RITTillToday": data[4].RITTillToday,
            "EndImunoglobulinInjectionDate": convert(data[4].EndImunoglobulinInjectionDate),
            "ProducerId": data[4].ProducerId,
            "ProducerName": data[4].ProducerName,
            "ActualInjectionType": data[4].ActualInjectionType,
            "ActualInjectionLocation": data[4].ActualInjectionLocation,
            "Dose": data[4].Dose,
            "InjectionInterval": data[4].InjectionInterval,
            "PatientWeight": data[4].PatientWeight,
            "RecordedPhenomena": data[4].RecordedPhenomena,
            "RecordedPhenomenaYes": data[4].RecordedPhenomenaYes,
            "igg_rit": data[4].igg_rit,

            "StemCellsTransplantation": data[3].StemCellsTransplantation,
            "StemCellsTransplantationYes": data[3].StemCellsTransplantationYes,
            "TransplantationDate": convert(data[3].TransplantationDate),
            "СВ34Source": data[3].CB14Soure,
            "GeneticTherapy": data[3].GeneticTherapy,
            "SeneticTherapyDate": convert(data[3].SeneticTherapyDate),

            "eSIDModels": data[0].eSIDModels,

            "firstPidSymptomModels": data[1].firstPidSymptomModels,  
        }
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin','*');
        return this.httpClient.post<any>(`${serverURL}/PatientRegistration`, this.payload, {headers:headers});
    }

    public saveModifiedGeneralData(patientId: number, data: any, eSIDModels:any): Observable<any> { 
        function convert(str) {
            if(str === "" || str == "Невідомо" || isNull(str)){
              return str
            }
            var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        }
    
        this.payload = {
          "firstName": data.firstName,
          "middleName": data.middleName,
          "lastName": data.lastName,
          "RadiosAgreement": data.radiosAgreement,
          "birthdayDate": convert(data.birthdayDate),
          "alive": data.alive,
          "liveCity": data.liveCity,
          "cityId": data.cityId,
          "sex": data.sex,
          "familyTiesPid": data.familyTiesPid, 
          "eSIDModels":eSIDModels
        }
       console.log(this.payload);
        return this.httpClient.put<any>(`${serverURL}/Patients/${patientId}`,this.payload);
    }
    public saveModifiedPID(pidDiagnosisId: number, data: any): Observable<any> { 
        function convert(str) {
            if(str === "" || str == "Невідомо" || isNull(str)){
              // console.log(isNull(str)? "" : str);
              return isNull(str)? "" : str;
            }
            var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        }
    console.log(data);
        this.payload = { 
          "damagedGenes": data.damagedGenes,
          "genesInfo": data.genesInfo,
          "geneticResearchDate": convert(data.geneticResearchDate),
          "sequencingMethod": data.sequencingMethod,            
          "laboratoryId": data.laboratoryId,
          "laboratoryName": data.laboratoryName,
          "geneticResearchReason": data.geneticResearchReason,
          "diagnosId":data.PatientId,  
          "PatientId": data.PatientId    
        }
        console.log(this.payload)
       
        return this.httpClient.put<any>(`${serverURL}/PidDiagnosis/${pidDiagnosisId}`,this.payload);
    }

    public saveModifiedPathToDiagnos(patientId: number, data: any,firstPidSymptomModels:any): Observable<any> { 
        function convert(str) {
            if(str === "" || str == "Невідомо" || isNull(str)){
              return str
            }
            var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        }
        this.payload = {
            "firstDiagnosisPidDate": convert(data.firstDiagnosisPidDate),
            "pidLabOnly": data.pidLabOnly,  
            "pidLabOnlyYes": data.pidLabOnlyYes,
            "igg": data.igg,
            "iga": data.iga,
            "igm": data.igm,
            "ige": data.ige,
            "firstPidSymptomModels":firstPidSymptomModels,
            "PatientId": data.PatientId,
        }
        return this.httpClient.put<any>(`${serverURL}/PathTo/${patientId}`,this.payload);
    }

    public saveModifiedsCGTDetails(sCGTDetailsId: number, data: any): Observable<any> { 
        function convert(str) {
            if(str === "" || str == "Невідомо" || isNull(str) || str == "Нi"){
              return str
            }
            var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        }
        console.log(data)
        this.payload = {
            "patientId":data.PatientId, 
            "stemCellsTransplantation":data.stemCellsTransplantation,
            "stemCellsTransplantationYes":data.stemCellsTransplantationYes, 
            "transplantationDate":convert(data.transplantationDate),
            "cB34Source":data.cB34Source,
            "geneticTherapy":data.geneticTherapy,
            "seneticTherapyDate":convert(data.seneticTherapyDate),
 
        }
        return this.httpClient.put<any>(`${serverURL}/SCGTs/${sCGTDetailsId}`,this.payload);
    }
    public saveModifiedRITDetails(rITDetailsId: number, data: any): Observable<any> { 
        function convert(str) {
            if(str === "" || str == "Невідомо" || isNull(str) || str == "Нi"){
              return str
            }
            var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        }
        this.payload = {
            "ritTillToday": data.ritTillToday,
            "endImunoglobulinInjectionDate": convert(data.endImunoglobulinInjectionDate),
            "producerId": data.producerId,
            "producerName": data.producerName,
            "actualInjectionType": data.actualInjectionType,
            "actualInjectionLocation": data.actualInjectionLocation,
            "dose": data.dose,
            "injectionInterval": data.injectionInterval,
            "patientWeight": data.patientWeight,
            "recordedPhenomena": data.recordedPhenomena,
            "recordedPhenomenaYes": data.recordedPhenomenaYes,
            "igg_rit": data.igg_rit,
            "patientId":data.PatientId
 
        }
        return this.httpClient.put<any>(`${serverURL}/RITs/${rITDetailsId}`,this.payload);
    }

    public confirmDiagnose(dpidId: number): Observable<any> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin','*'); 
        return this.httpClient.put<any>(`${serverURL}/PidDiagnosis/accept/${dpidId}`, {}, {headers:headers});
    }

}
