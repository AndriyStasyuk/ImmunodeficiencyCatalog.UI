import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { serverURL } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * DcotorService
 */

@Injectable()
export class PatientService {
    payload: any;

    constructor(private httpClient: HttpClient) { }

    public get(): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/patients`);
    }

    public getPatientById(patientId: number): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/PatientRegistration/${patientId}`);
    }

    public registrate(data: any): Observable<any>{
        this.payload = {
            "firstName": data[0].firstName,
            "middleName": data[0].middleName,
            "lastName": data[0].lastName,
            "RadiosAgreement": data[0].RadiosAgreement,
            "birthdayDate": data[0].birthdayDate,
            "alive": data[0].alive, // need to add on UI
            "LiveCity": data[0].LiveCity,
            "CityId": data[0].CityId,
            "sex": data[0].sex,
            "familyTiesPid": data[0].familyTiesPid,

            "firstDiagnosisPidDate": data[1].firstDiagnosisPidDate,
            "pidLabOnly": data[1].pidLabOnly,
            "igg": data[1].igg,
            "iga": data[1].iga,
            "igm": data[1].igm,
            "ige": data[1].ige,

            "DamagedGenes": data[2].DamagedGenes,
            "GenesInfo": data[2].GenesInfo,
            "GeneticResearchDate": data[2].GeneticResearchDate,
            "SequencingMethod": data[2].SequenticMethod,
            "LaboratoryId": data[2].LaboratoryId,
            "LaboratoryName": data[2].LaboratoryName,
            "GeneticResearchReason": data[2].GeneticResearchReason,
            "MutationsNo": data[2].MutationsNo,
            "MutationsYes": data[2].MutationsYes,
            "diagnosesModel": null,
            // {
            //     "DiagnosId": 1
            // },

            "RITTillToday": data[4].RITTillToday,
            "FirstImunoglobulinInjectionDate": "2019-09-06T17:15:27Z",
            "EndImunoglobulinInjectionDate": data[4].EndImunoglobulinInjectionDate,
            "ProducerId": data[4].ProducerId,
            "ProducerName": data[4].ProducerName,
            "ActualInjectionType": data[4].ActualInjectionType,
            "ActualInjectionLocation": data[4].ActualInjectionLocation,
            "Dose": data[4].Dose,
            "InjectionInterval": data[4].InjectionInterval,
            "PatientWeight": data[4].PatientWeight,
            "RecordedPhenomena": data[4].RecordedPhenomena,
            "igg_rit": 1.0,

            "StemCellsTransplantation": data[3].StemCellsTransplantation,
            "TransplantationDate": data[3].TransplantationDate,
            "СВ34Source": data[3].CB14Soure,
            "GeneticTherapy": data[3].GeneticTherapy,
            "SeneticTherapyDate": data[3].SeneticTherapyDate,

            "eSIDModels": data[0].eSIDModels,

            "firstPidSymptomModels": data[1].firstPidSymptomModels,

            "symptomModels":[]  
        }
        console.log("################################################")
        console.log(this.payload)
        console.log("################################################")
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin','*');
        return
        // return this.httpClient.post<any>(`${serverURL}/PatientRegistration`, this.payload, {headers:headers});
    }

}
