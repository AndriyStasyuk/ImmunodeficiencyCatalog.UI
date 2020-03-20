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
            "pidLabOnly": "Ні",  // fixed it
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
            "diagnosesModel":data[2].diagnosesModel.diagnosId,
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

}
