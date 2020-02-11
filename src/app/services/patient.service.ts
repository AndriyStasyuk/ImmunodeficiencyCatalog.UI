import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { serverURL } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

/**
 * DcotorService
 */

@Injectable()
export class PatientService {

    constructor(private httpClient: HttpClient) { }

    public get(): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/patients`);
    }

    public getPatientById(patientId: number): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/PatientRegistration/${patientId}`);
    }

}
